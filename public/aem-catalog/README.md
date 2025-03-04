# AEM Component Catalog

## Table of Contents

- [AEM Component Catalog](#aem-component-catalog)
  - [Table of Contents](#table-of-contents)
  - [1. Code Project Structure](#1-code-project-structure)
    - [Key Subprojects](#key-subprojects)
  - [2. Installation Instructions](#2-installation-instructions)
  - [3. Configurations](#3-configurations)
    - [3.1 OSGi Configurations](#31-osgi-configurations)
      - [a. AEM Component Catalog Configuration Service](#a-aem-component-catalog-configuration-service)
      - [b. AEM Component Catalog Dialog Content Command](#b-aem-component-catalog-dialog-content-command)
      - [c. AEM Component Catalog Dialog Proxy](#c-aem-component-catalog-dialog-proxy)
    - [3.2 Component Configurations](#32-component-configurations)
      - [a. listaemcomponents (List AEM Components)](#a-listaemcomponents-list-aem-components)
    - [3.3 listaemtemplates (List AEM Templates)](#33-listaemtemplates-list-aem-templates)
  - [4. Permissions on Author and Publish](#4-permissions-on-author-and-publish)
    - [4.1. Author](#41-author)
      - [a. Author](#a-author)
      - [b. adaptive-write system user](#b-adaptive-write-system-user)
    - [4.2. Publish](#42-publish)
      - [a. Anonymous](#a-anonymous)
      - [b. adaptive-write system user](#b-adaptive-write-system-user-1)
  - [5. Template list overview](#5-template-list-overview)
  - [6. Component list overview](#6-component-list-overview)
  - [7. Playground Pre-content authoring overview](#7-playground-pre-content-authoring-overview)
  - [8. Workspaces](#8-workspaces)
  - [9. Features](#9-features)
  - [10. User Flow](#10-user-flow)
    - [Components](#components)
    - [Templates](#templates)
  - [11. Author Vs Publish experience](#11-author-vs-publish-experience)
    - [Author](#author)
    - [Publish](#publish)

## 1. Code Project Structure

The project follows the standard AEM maven archetype.

### Key Subprojects

- **ui.apps** - UI AEM components
- **listaemcomponents-react** - anchor for react code
- **listaemtemplates-react** - anchor for react code
- **playground-react** - anchor for react code
- **core** - Java AEM components and Servlets
- **ui.frontend** – builds css based on boostrap
- **ui.frontend-react** – react code for playground, listaemcomponents and listaemtemplates JavaScript components.

## 2. Installation Instructions

1. Build project: `mvn clean install`

2. Install package located under "all/target" - `aem-component-catalog.all-1.0.0-SNAPSHOT.zip`

3. Create 2 pages:
   - On the first page "List AEM Components" on "Component" tab, configure it with the fields requested.

   ![Component Configuration - Placeholder](images/component_config.png)

   - On the second page "List AEM Templates" on "Template" tab, configure it with the fields requested.

   ![Template Configuration - Placeholder](images/template_config.png)

4. Edit the "Header" properties in order to point to the created previous pages.

   ![Header Properties - Placeholder](images/header_properties.png)

## 3. Configurations

### 3.1 OSGi Configurations

#### a. AEM Component Catalog Configuration Service

**`com.xpediantsolutions.ccatalog.core.services.impl.ConfigurationServiceImpl`**

**General configurations:**

- **Playground Base Path**: The temporary path where all pages and workspaces are created
- **Playground Template Path**: The template used for the playground
- **Playground Template Component Path**: The path where the playground component is inserted in the generated page
- **Template Content Path**: A fallback configuration that maps the path of the component to be examined in the generated page. This setting can also be configured in the AEM component.
- **Max Number of Workspaces**: The maximum number of workspaces that can be created
- **Workspace Cleanup Time (milliseconds)**: The lifespan of workspaces. Workspaces are automatically deleted after this time.

#### b. AEM Component Catalog Dialog Content Command

**`com.xpediantsolutions.ccatalog.core.services.impl.AEMDialogProxyCommandImpl`**

Replaces the Dialog code with custom code using a placeholder, use to apply workarounds for components JavaScript.

#### c. AEM Component Catalog Dialog Proxy

**`com.xpediantsolutions.ccatalog.core.servlets.AEMDialogProxy`**

Adds custom JavaScript for all dialogs. Dialogs are served through a proxy which allows to add custom JavaScript.

### 3.2 Component Configurations

#### a. listaemcomponents (List AEM Components)

**Components Tab:**

- **Groups to include**: Components groups to include
- **Paths to include (Must match both groups and Paths)**: Components paths to include.

![Components Tab - Placeholder](images/components_tab.png)

**Templates Tab:**

- **Template Title matching String**: Regular expression that filters the path of the template
- **Template Configuration Path Pattern**: Regular expression that filters the path of the template

Both values do the same thing, but is meant for the regular expression to be simpler since its split into two. Example: `/conf/xpomnichannel/settings(.)*`

![Templates Tab - Placeholder](images/templates_tab.png)

**Live Usage Tab:**

- **Live Usage Query Path**: Path to limit the live usage query. If empty it uses `/content`

![Live Usage Tab - Placeholder](images/live_usage_tab.png)

### 3.3 listaemtemplates (List AEM Templates)

**Templates Tab:**

- **Template Title matching String**: Regular expression that filters the path of the template
- **Template Configuration Path Pattern**: Regular expression that filters the path of the template

Both values do the same thing, but is meant for the regular expression to be simpler, since its split into two. Example: `/conf/xpomnichannel/settings(.)*`

![Templates Tab - Placeholder](images/templates_configuration_path_pattern.png)

**Live Usage Tab:**

- **Live Usage Query Path (ex /content/…)**: Path to limit the live usage query. If empty it uses `/content`

![Templates Tab - Placeholder](images/live_usage_path.png)

## 4. Permissions on Author and Publish

### 4.1. Author

#### a. Author

(author permissions)

![Author Permissions - Placeholder](images/author_permissions.png)
> **Image Placeholder**: *Screenshot of author permissions configuration*

#### b. adaptive-write system user

- **read**:
  - `/apps`
  - `/conf`
  - `/content`
  - `/libs`
- **read, create, update, delete**:
  - `/var/xpediant`

### 4.2. Publish

#### a. Anonymous

- **read**:
  - `/libs/clientlibs`
  - `/libs/cq`
  - `/apps/xpomnichannel` (Need permission to the dialogs)
  - `/conf/xpomnichannel`
- **read, create, update, delete**:
  - `/var/xpediant`

#### b. adaptive-write system user

- **read**:
  - `/apps`
  - `/conf`
  - `/content`
  - `/libs`
- **read, create, update, delete**:
  - `/var/xpediant`

## 5. Template list overview

A list of templates will be displayed. Users can search by title, and clicking on a template will show its live usage.

![Template List - Placeholder](images/template_list_overview.png)

![Template List - Placeholder](images/template_list_usage_count.png)

> **Image Placeholder**: *Screenshot of the template list interface*

## 6. Component list overview

A list of components will be displayed. Users can search by title or by group, and clicking component will be redirect to the component playground page.

![Component List - Placeholder](images/component_list_overview.png)
> **Image Placeholder**: *Screenshot of the component list interface*

## 7. Playground Pre-content authoring overview

1. Click the "Enable Author View"

   ![Enable Author View - Placeholder](images/enable_author_view.png)
   > **Image Placeholder**: *Screenshot showing the "Enable Author View" button*

2. The page will change to author mode, author the component and then click on "SAVE DEMO CONTENT".

   ![Author Mode - Placeholder](images/author_mode.png)
   > **Image Placeholder**: *Screenshot of the author mode interface*

3. A new page will be added to the "import content" dropdown.
   - To delete a demo page, click on "CLEAR PAGE DEMO CONTENT", the page will be removed from the "import content" dropdown.

   ![Import Content Dropdown - Placeholder](images/import_content.png)
   > **Image Placeholder**: *Screenshot of the import content dropdown*

4. Click on "Enable Publish View" again, to return to the Publish View.

   ![Publish View - Placeholder](images/enable_publish_view.png)
   > **Image Placeholder**: *Screenshot showing the publish view interface*

## 8. Workspaces

Each user gets their own workspace, and a cookie named: `XP_COMP_CTLG_ID` is generated to track the workspace identifier. The workspace is automatically deleted after a configurable amount of time.

Alternatively, clicking on "Clear Workspace" will delete the current user's workspace.

Users can share their workspace by appending the workspace identifier to the WS URL parameter. This parameter is displayed when clicking the 'SHARE LINK' button.

Additionally, there is a maximum number of workspaces that can be created, which is controlled by an OSGi configuration.

## 9. Features

- **Hide dialog fields**: Fields on the dialog in the playground may be hidden if they have the class (hide-in-catalog). The class is added in the dialog with granite: class attribute. The field is hidden through a custom js script in the OSGI config.

  ```xml
  <dropdown
    granite:class="cq-dialog-dropdown-showhide"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/select"
    fieldLabel="Dropdown"
    name="./dropdown">
  ```

- **Component Thumbnails**: The image is source from the component UI folder. The "icon.png" file will be used.

  ![Component Thumbnails - Placeholder](images/component_thumbnails.png)
  > **Image Placeholder**: *Example of component thumbnails*

- **Template Thumbnails**: The image is source from the template UI folder. The "thumnail.png" file will be used.

  ![Template Thumbnails - Placeholder](images/template_thumbnails.png)
  > **Image Placeholder**: *Example of template thumbnails*

## 10. User Flow

### Components

- The user navigates to the component page.

  ![Component Page - Placeholder](images/component_page.png)
  > **Image Placeholder**: *Screenshot of the component page*

- The user clicks on a specific component, and the playground page for that component is displayed.

  ![Playground Page - Placeholder](images/playground_page.png)
  > **Image Placeholder**: *Screenshot of the playground page*

- The user selects a template and enables the playground options.

  ![Playground Options - Placeholder](images/playground_options.png)
  > **Image Placeholder**: *Screenshot of the playground options*

### Templates

- The user navigates to the template page.

  ![Templates Page](images/templates_page.png)

- The user clicks on a specific template and the usage report is displayed.

  ![Usage Report - Placeholder](images/usage_report.png)

## 11. Author Vs Publish experience

The Admin section is not available in the publish instance, so pre-generated content pages cannot be created there. These pages must be created and managed in the author instance.

### Author

(Author instance capabilities)

![Author Experience - Placeholder](images/author_experience.png)
> **Image Placeholder**: *Screenshot of the author instance interface*

### Publish

(Publish instance capabilities)

![Publish Experience - Placeholder](images/publish_experience.png)
> **Image Placeholder**: *Screenshot of the publish instance interface*
