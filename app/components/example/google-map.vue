<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

interface MapMarker {
  position: {
    lat: number
    lng: number
  }
  title?: string
}

interface Props {
  // Center coordinates for the map
  center?: {
    lat: number
    lng: number
  }
  // Array of markers to display on the map
  markers?: MapMarker[]
  // Map zoom level (1-20)
  zoom?: number
  // Map height (with CSS units)
  height?: string
  // Enable/disable map controls
  disableDefaultUI?: boolean
  // Map style: 'roadmap' | 'satellite' | 'hybrid' | 'terrain'
  mapTypeId?: string
}

// Define props with defaults
const props = withDefaults(defineProps<Props>(), {
  center: () => ({ lat: 40.689247, lng: -74.044502 }),
  markers: () => [],
  zoom: 15,
  height: '500px',
  disableDefaultUI: false,
  mapTypeId: 'roadmap',
})

// Get API key from runtime config
const config = useRuntimeConfig()
const apiKey = config.public.googleApiKey
</script>

<template>
  <ClientOnly>
    <div v-if="!apiKey" class="p-4 text-red-500">
      Google Maps API key not configured
    </div>
    <GoogleMap
      v-else
      :api-key="apiKey"
      :style="{ width: '100%', height: props.height }"
      :center="center"
      :zoom="zoom"
      :options="{
        disableDefaultUI: props.disableDefaultUI,
        mapTypeId: props.mapTypeId,
      }"
    >
      <!-- Default center marker if no markers provided -->
      <Marker
        v-if="props.markers.length === 0"
        :options="{ position: props.center }"
      />
      <!-- Custom markers -->
      <Marker
        v-for="(marker, index) in props.markers"
        :key="index"
        :options="{
          position: marker.position,
          title: marker.title,
        }"
      />
    </GoogleMap>
  </ClientOnly>
</template>
