# AEM Component Catalog

A comprehensive tool for exploring, testing, and documenting AEM components and templates.

## Table of Contents

- [AEM Component Catalog](#aem-component-catalog)
  - [Table of Contents](#table-of-contents)
  - [1. Project Structure](#1-project-structure)
  - [2. Installation Instructions](#2-installation-instructions)
  - [3. Configuration](#3-configuration)
    - [3.1 OSGi Configurations](#31-osgi-configurations)
      - [AEM Component Catalog Configuration Service](#aem-component-catalog-configuration-service)
      - [AEM Component Catalog Dialog Content Command](#aem-component-catalog-dialog-content-command)
      - [AEM Component Catalog Dialog Proxy](#aem-component-catalog-dialog-proxy)
    - [3.2 Component Configurations](#32-component-configurations)
      - [List AEM Components (listaemcomponents)](#list-aem-components-listaemcomponents)
    - [3.3 Template Configurations](#33-template-configurations)
      - [List AEM Templates (listaemtemplates)](#list-aem-templates-listaemtemplates)
  - [4. Required Permissions](#4-required-permissions)
    - [4.1 Author Instance](#41-author-instance)
    - [4.2 Publish Instance](#42-publish-instance)
  - [5. Features](#5-features)
    - [Template List](#template-list)
    - [Component List](#component-list)
    - [Playground Pre-content Authoring](#playground-pre-content-authoring)
    - [Workspaces](#workspaces)
    - [UI Customization](#ui-customization)
  - [6. Usage Guide](#6-usage-guide)
    - [Component Workflow](#component-workflow)
    - [Template Workflow](#template-workflow)
  - [7. Author vs Publish Experience](#7-author-vs-publish-experience)

## 1. Project Structure

The project follows the standard AEM maven archetype with the following key subprojects:

- **ui.apps**: UI AEM components
- **listaemcomponents-react**: React code for component listing
- **listaemtemplates-react**: React code for template listing
- **playground-react**: React code for component playground
- **core**: Java AEM components and Servlets
- **ui.frontend**: CSS builds based on Bootstrap
- **ui.frontend-react**: React code for all JavaScript components (playground, listaemcomponents, listaemtemplates)

## 2. Installation Instructions

1. **Build the project**:
   ```
   mvn clean install
   ```

2. **Install the package**:
   - Install the package located at `all/target/aem-component-catalog.all-1.0.0-SNAPSHOT.zip`

3. **Create required pages**:
   - Create a page for "List AEM Components" and configure the "Component" tab with the required fields
   - Create a page for "List AEM Templates" and configure the "Template" tab with the required fields

4. **Configure the Header**:
   - Edit the "Header" properties to point to the previously created pages
   - Set the URLs for both the components page and templates page

## 3. Configuration

### 3.1 OSGi Configurations

#### AEM Component Catalog Configuration Service

**Bundle**: `com.xpediantsolutions.ccatalog.core.services.impl.ConfigurationServiceImpl`

**General configurations**:
- **Playground Base Path**: Temporary path where pages and workspaces are created
- **Playground Template Path**: Template used for the playground page
- **Playground Template Component Path**: Path where the playground component is inserted in the generated page
- **Template Content Path**: Fallback configuration mapping the path of components to be examined
- **Max Number of Workspaces**: Maximum number of workspaces that can be created
- **Workspace Cleanup Time**: Lifespan of workspaces in milliseconds (workspaces are auto-deleted after this time)

#### AEM Component Catalog Dialog Content Command

**Bundle**: `com.xpediantsolutions.ccatalog.core.services.impl.AEMDialogProxyCommandImpl`

Used to replace Dialog code with custom code via placeholder, allowing workarounds for component JavaScript.

#### AEM Component Catalog Dialog Proxy

**Bundle**: `com.xpediantsolutions.ccatalog.core.servlets.AEMDialogProxy`

Adds custom JavaScript for all dialogs through a proxy service.

### 3.2 Component Configurations

#### List AEM Components (listaemcomponents)

**Components Tab**:
- **Groups to include**: Component groups to include in the listing
- **Paths to include**: Component paths to include (must match both groups and paths)

**Templates Tab**:
- **Template Title matching String**: Regular expression that filters template paths
- **Template Configuration Path Pattern**: Additional regex filter for template paths

  *Note*: Both settings work together to create a simpler regex. Example: `/conf/xpomnichannel/settings(.)*`

**Live Usage Tab**:
- **Live Usage Query Path**: Path to limit the live usage query (defaults to `/content` if empty)

### 3.3 Template Configurations

#### List AEM Templates (listaemtemplates)

**Templates Tab**:
- **Template Title matching String**: Regular expression that filters template paths
- **Template Configuration Path Pattern**: Additional regex filter for template paths

  *Example*: `/conf/xpomnichannel/settings(.)*`

**Live Usage Tab**:
- **Live Usage Query Path**: Path to limit the live usage query (defaults to `/content` if empty)

## 4. Required Permissions

### 4.1 Author Instance

**Author user**:
- Standard author permissions

**adaptive-write system user**:
- **read**: `/apps`, `/conf`, `/content`, `/libs`
- **read, create, update, delete**: `/var/xpediant`

### 4.2 Publish Instance

**Anonymous user**:
- **read**:
  - `/libs/clientlibs`
  - `/libs/cq`
  - `/apps/xpomnichannel` (needed for dialogs)
  - `/conf/xpomnichannel`
- **read, create, update, delete**: `/var/xpediant`

**adaptive-write system user**:
- **read**: `/apps`, `/conf`, `/content`, `/libs`
- **read, create, update, delete**: `/var/xpediant`

## 5. Features

### Template List

- Displays a searchable list of templates
- Shows live usage information for each template when clicked
- Provides consistent interface for exploring template usage

### Component List

- Displays a searchable list of components (by title or by group)
- Clicking a component redirects to its playground page
- Shows thumbnails for visual identification

### Playground Pre-content Authoring

1. Click "Enable Author View" to enter authoring mode
2. Configure the component as needed
3. Click "SAVE DEMO CONTENT" to save your configuration
4. The saved configuration will be added to the "import content" dropdown
5. Use "CLEAR PAGE DEMO CONTENT" to remove saved configurations
6. Click "Enable Publish View" to return to the regular view

### Workspaces

- Each user gets their own workspace tracked via cookie (`XP_COMP_CTLG_ID`)
- Workspaces are automatically deleted after a configurable amount of time
- Users can manually delete their workspace using "Clear Workspace"
- Workspaces can be shared via URL parameter (WS) shown when clicking "SHARE LINK"
- Maximum number of workspaces is controlled by OSGi configuration

### UI Customization

- **Hide dialog fields**: Add `granite:class="hide-in-catalog"` to any dialog field you want to hide in the catalog
- **Component Thumbnails**: Place an `icon.png` file in the component's UI folder
- **Template Thumbnails**: Place a `thumbnail.png` file in the template's UI folder

## 6. Usage Guide

### Component Workflow

1. Navigate to the component listing page
2. Search or browse for the desired component
3. Click on a component to view it in the playground
4. Select a template and enable playground options
5. Configure the component using the authoring tools
6. Save configurations for future reference

### Template Workflow

1. Navigate to the template listing page
2. Search for the desired template
3. Click on a template to view its usage report
4. Review where the template is being used in the content hierarchy

## 7. Author vs Publish Experience

The Admin section (which includes content authoring capabilities) is only available in the author instance. Pre-generated content pages must be created and managed in the author instance and cannot be created in the publish instance.
