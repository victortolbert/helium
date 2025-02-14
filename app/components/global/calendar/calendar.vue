<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import iCalendarPlugin from '@fullcalendar/icalendar'

import { INITIAL_EVENTS, createEventId } from '~/utils/event-utils'

definePageMeta({
  title: 'Calendar',
  layout: 'default',
})

const events = ref({
  url: '/resources/feeds/main-calendar.ics',
  format: 'ics',
})

const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    iCalendarPlugin,
    listPlugin,
    timeGridPlugin,
    interactionPlugin,
  ],
  headerToolbar: {
    left: 'title',
    center: '',
    right: 'today prev,next',
  },
  initialView: 'listWeek',
  initialEvents: INITIAL_EVENTS,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  events: {
    url: '/resources/feeds/main-calendar.ics',
    format: 'ics',
  },
})

const currentEvents = ref([])

function handleWeekendsToggle() {
  calendarOptions.value.weekends = !calendarOptions.value.weekends
}

function handleDateSelect(selectInfo) {
  const title = prompt('Please enter a new title for your event')
  const calendarApi = selectInfo.view.calendar

  calendarApi.unselect()

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    })
  }
}

function handleEventClick(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`))
    clickInfo.event.remove()
}

function handleEvents(events) {
  currentEvents.value = events
}

function toggleWeekends() {
  calendarOptions.value.weekends = !calendarOptions.value.weekends // toggle the boolean!
}

// const fullCalendar = ref(null)
// const calendarApi = fullCalendar.value.getApi()
</script>

<template>
  <section>
    <!-- <UButton @click="toggleWeekends">
      toggle weekends
    </UButton> -->

    <!-- <UButton @click="calendarApi.next()">
      Next?
    </UButton> -->

    <FullCalendar
      ref="fullCalendar"
      class="demo-app-calendars"
      :options="calendarOptions"
    >
      <template #event-content="{ timeText, event }">
        <!--
          event - Event Object
          timeText
          isStart
          isEnd
          isMirror
          isPast
          isFuture
          isToday
          el - the element. only available in eventDidMount and eventWillUnmount
          view - View Object
        -->
        <b class="font-semibold">{{ timeText }}</b>
        <span class="text-info">{{ event.title }}</span>
      </template>
    </FullCalendar>
  </section>
</template>

<style>
  /* --ui-container: var(--container-5xl); */
  /* --ui-radius: var(--radius-sm); */

  /* --ui-text-dimmed: var(--ui-color-neutral-400); */
  /* --ui-text-muted: var(--ui-color-neutral-500); */
  /* --ui-text-toned: var(--ui-color-neutral-600); */
  /* --ui-text: var(--ui-color-neutral-700); */
  /* --ui-text-highlighted: var(--ui-color-neutral-900); */

  /* --ui-bg: var(--color-white); */
  /* --ui-bg-muted: var(--ui-color-neutral-50); */
  /* --ui-bg-elevated: var(--ui-color-neutral-100); */
  /* --ui-bg-accented: var(--ui-color-neutral-200); */
  /* --ui-bg-inverted: var(--ui-color-neutral-900); */

  /* --ui-border: var(--ui-color-neutral-200); */
  /* --ui-border-muted: var(--ui-color-neutral-200); */
  /* --ui-border-accented: var(--ui-color-neutral-300); */
  /* --ui-border-inverted: var(--ui-color-neutral-900); */

:root {
  --fc-page-bg-color: var(--ui-bg);
  --fc-small-font-size: .85em;

  --fc-bg-event-opacity: 0.3;
  --fc-bg-event-color: #8fdf82;
  --fc-border-color: var(--ui-border);
  --fc-neutral-bg-color: var(--ui-bg-muted);
  --fc-neutral-text-color:  var(--ui-text);

  --fc-button-border-color: var(--ui-border-accented);
  --fc-button-bg-color: var(--ui-bg-primary);
  --fc-button-text-color: var(--ui-text);
  --fc-button-hover-border-color: var(--ui-border-accented);
  --fc-button-hover-bg-color: var(--ui-bg-accented);
  --fc-button-active-border-color: var(--ui-border-accented);
  --fc-button-active-bg-color: var(--ui-bg-elevated);

  --fc-daygrid-event-dot-width: var(--spacing-4);

  --fc-list-event-hover-bg-color: var(--ui-bg-accented);
  --fc-list-event-dot-width: var(--spacing-4);

  --fc-event-resizer-thickness: var(--spacing-2);
  --fc-event-resizer-dot-total-width: var(--spacing-4);
  --fc-event-resizer-dot-border-width: var(--spacing-1);
  --fc-event-bg-color: var(--ui-bg);

  --fc-event-selected-overlay-color: var(--ui-bg-accented);
  --fc-event-border-color: var(--ui-border);
  --fc-event-text-color: var(--ui-text);

  --fc-more-link-bg-color: var(--ui-bg-accented);
  --fc-more-link-text-color: inherit;

  --fc-today-bg-color: rgba(255, 220, 40, .15);
  --fc-highlight-color: rgba(188, 232, 241, .3);
  --fc-now-indicator-color: red;
  --fc-non-business-color: hsla(0, 0%, 84%, .3);
}

.fc-list-event-time {
  font-size: var(--text-sm);
  color: var(--ui-text-muted);
}
.fc-list-day-text {
  font-weight: normal;
  color: var(--ui-text);
}
.fc-list-day-side-text{
  font-size: var(--text-2xs);
  color: var(--ui-text-muted);
}
</style>
