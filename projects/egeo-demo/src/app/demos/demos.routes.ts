/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export class EgeoDemoMenu {
   id: string;
   name: string;
   path: string;
   moduleLazyLoad: string;
}

export const EGEO_DEMO_MENU: EgeoDemoMenu[] = [
   { id: 'st-alerts', name: 'Alerts', path: 'alerts-demo', moduleLazyLoad: 'StAlertsDemoModule' },
   { id: 'st-breadcrumbs', name: 'Breadcrumbs', path: 'breadcrumbs', moduleLazyLoad: 'StBreadcrumbsDemoModule' },
   { id: 'st-bubble', name: 'Bubble', path: 'bubble-demo', moduleLazyLoad: 'StBubbleDemoModule' },
   { id: 'st-button', name: 'Button', path: 'button-demo', moduleLazyLoad: 'StButtonDemoModule' },
   { id: 'st-checkbox', name: 'Checkbox', path: 'checkbox-demo', moduleLazyLoad: 'StCheckboxDemoModule' },
   { id: 'st-color-picker', name: 'Color Picker', path: 'color-picker-demo', moduleLazyLoad: 'StColorPickerDemoModule' },
   { id: 'st-draggable-card', name: 'Draggable card', path: 'draggable-card-demo', moduleLazyLoad: 'StDraggableCardDemoModule' },
   { id: 'st-dropdown-menu', name: 'Dropdown menu', path: 'dropdown-menu-demo', moduleLazyLoad: 'StDropdownMenuDemoModule' },
   { id: 'st-file-button', name: 'File button', path: 'file-button-demo', moduleLazyLoad: 'StFileButtonDemoModule' },
   { id: 'st-filter-selector', name: 'Filter selector', path: 'filter-selector-demo', moduleLazyLoad: 'StFilterSelectorDemoModule' },
   { id: 'st-footer', name: 'Footer', path: 'footer-demo', moduleLazyLoad: 'StFoterDemoModule' },
   { id: 'st-foreground-notifications', name: 'Foreground Notifications',
      path: 'foreground-notifications-demo', moduleLazyLoad: '@StForegroundNotificationsModule' },
   { id: 'st-form', name: 'Form', path: 'form-demo', moduleLazyLoad: 'StFormDemoModule' },
   { id: 'st-form-list', name: 'Form List', path: 'form-list-demo', moduleLazyLoad: 'StFormListDemoModule' },
   { id: 'st-fullscreen-layout', name: 'Fullscreen Layout', path: 'fullscreen-layout-demo', moduleLazyLoad: 'StFullscreenLayoutDemoModule' },
   { id: 'st-header', name: 'Header', path: 'header-demo', moduleLazyLoad: 'StHeaderDemoModule' },
   { id: 'st-horizontal-tabs', name: 'Horizontal Tabs', path: 'horizontal-tabs-demo', moduleLazyLoad: 'StHorizontalTabsModule' },
   { id: 'st-input', name: 'Input', path: 'input', moduleLazyLoad: 'StInputDemoModule' },
   { id: 'st-item-list', name: 'Item List', path: 'item-list-demo', moduleLazyLoad: 'StItemListDemoModule' },
   { id: 'st-label', name: 'Label', path: 'label-demo', moduleLazyLoad: 'StLabelDemoModule' },
   { id: 'st-launcher', name: 'Launcher', path: 'launcher-demo', moduleLazyLoad: 'StLauncherDemoModule' },
   { id: 'st-modal', name: 'Modal', path: 'modal-demo', moduleLazyLoad: 'StModalDemoModule' },
   { id: 'st-modal2', name: 'Modal2', path: 'modal2-demo', moduleLazyLoad: 'StModal2DemoModule' },
   { id: 'st-page-title', name: 'Page Title', path: 'page-title-demo', moduleLazyLoad: 'StPageTitleDemoModule' },
   { id: 'st-pagination', name: 'Pagination', path: 'pagination-demo', moduleLazyLoad: 'StPaginationDemoModule' },
   { id: 'st-pop-over', name: 'Pop Over', path: 'pop-over-demo', moduleLazyLoad: 'StPopOverDemoModule' },
   { id: 'st-progress-bar', name: 'Progress Bar', path: 'progress-bar-demo', moduleLazyLoad: 'StProgressBarDemoModule' },
   { id: 'st-radio-menu', name: 'Radio Menu', path: 'radio-menu-demo', moduleLazyLoad: 'StRadioMenuDemoModule' },
   { id: 'st-radio', name: 'Radio', path: 'radio-demo', moduleLazyLoad: 'StRadioDemoModule' },
   { id: 'st-search', name: 'Search', path: 'search-demo', moduleLazyLoad: 'StSearchDemoModule' },
   { id: 'st-select', name: 'Select', path: 'select-demo', moduleLazyLoad: 'StSelectDemoModule' },
   { id: 'st-sidebar', name: 'Sidebar', path: 'sidebar-demo', moduleLazyLoad: 'SidebarDemoModule' },
   { id: 'st-spinner', name: 'Spinner', path: 'spinner-demo', moduleLazyLoad: 'StSpinnerDemoModule' },
   { id: 'st-switch', name: 'Switch', path: 'switch-demo', moduleLazyLoad: 'StSwitchDemoModule' },
   { id: 'st-table', name: 'Table', path: 'table-demo', moduleLazyLoad: 'StTableDemoModule' },
   { id: 'st-tag-input', name: 'Tag Input', path: 'tag-input-demo', moduleLazyLoad: 'StTagInputDemoModule' },
   { id: 'st-textarea', name: 'Textarea', path: 'textarea', moduleLazyLoad: 'StTextareaDemoModule' },
   { id: 'st-toggle-buttons', name: 'Toggle Buttons', path: 'toggle-buttons-demo', moduleLazyLoad: 'StToggleButtonsDemoModule' },
   { id: 'st-tooltip', name: 'Tooltip', path: 'tooltip-demo', moduleLazyLoad: 'StTooltipDemoModule' },
   { id: 'st-two-list-selection', name: 'Two List Selection', path: 'two-list-selection-demo', moduleLazyLoad: 'StTwoListSelectionDemoModule' },
   { id: 'st-vertical-tabs', name: 'Vertical Tabs', path: 'vertical-tabs-demo', moduleLazyLoad: 'StVerticalTabsDemoModule' },
   { id: 'st-zero-page', name: 'Zero page', path: 'zero-page-demo', moduleLazyLoad: 'StZeroPageDemoModule' },
   { id: 'st-widget', name: 'Widget', path: 'widget-demo', moduleLazyLoad: 'StWidgetDemoModule' }
];

// tslint:disable:max-line-length
const routes: Routes = [
   { path: 'alerts-demo', loadChildren: () => import('./st-alert-demo/st-alerts-demo.module').then(m => m.StAlertsDemoModule) },
   { path: 'breadcrumbs', loadChildren: () => import('./st-breadcrumbs-demo/st-breadcrumbs-demo.module').then(m => m.StBreadcrumbsDemoModule) },
   { path: 'bubble-demo', loadChildren: () => import('./st-bubble-demo/st-bubble-demo.module').then(m => m.StBubbleDemoModule) },
   { path: 'button-demo', loadChildren: () => import('./st-button-demo/st-button-demo.module').then(m => m.StButtonDemoModule) },
   { path: 'checkbox-demo', loadChildren: () => import('./st-checkbox-demo/st-checkbox-demo.module').then(m => m.StCheckboxDemoModule) },
   { path: 'color-picker-demo', loadChildren: () => import('./st-color-picker-demo/st-color-picker-demo.module').then(m => m.StColorPickerDemoModule) },
   { path: 'draggable-card-demo', loadChildren: () => import('./st-draggable-card-demo/st-draggable-card-demo.module').then(m => m.StDraggableCardDemoModule) },
   { path: 'dropdown-menu-demo', loadChildren: () => import('./st-dropdown-menu-demo/st-dropdown-menu-demo.module').then(m => m.StDropdownMenuDemoModule) },
   { path: 'file-button-demo', loadChildren: () => import('./st-file-button-demo/st-file-button-demo.module').then(m => m.StFileButtonDemoModule) },
   { path: 'filter-selector-demo', loadChildren: () => import('./st-filter-selector-demo/st-filter-selector-demo.module').then(m => m.StFilterSelectorDemoModule) },
   { path: 'footer-demo', loadChildren: () => import('./st-footer-demo/st-footer-demo.module').then(m => m.StFooterDemoModule) },
   { path: 'foreground-notifications-demo', loadChildren: () => import('./st-foreground-notifications-demo/st-foreground-notifications-demo.module').then(m => m.StForegroundNotificationsDemoModule) },
   { path: 'form-demo', loadChildren: () => import('./st-form-demo/st-form-demo.module').then(m => m.StFormDemoModule) },
   { path: 'form-list-demo', loadChildren: () => import('./st-form-list-demo/st-form-list-demo.module').then(m => m.StFormListDemoModule) },
   { path: 'fullscreen-layout-demo', loadChildren: () => import('./st-fullscreen-layout-demo/st-fullscreen-layout-demo.module').then(m => m.StFullscreenLayoutDemoModule) },
   { path: 'header-demo', loadChildren: () => import('./st-header-demo/st-header-demo.module').then(m => m.StHeaderDemoModule) },
   { path: 'horizontal-tabs-demo', loadChildren: () => import('./st-horizontal-tabs-demo/st-horizontal-tabs-demo.module').then(m => m.StHorizontalTabsDemoModule) },
   { path: 'info-box-demo', loadChildren: () => import('./st-info-box-demo/st-info-box-demo.module').then(m => m.StInfoBoxDemoModule) },
   { path: 'input', loadChildren: () => import('./st-input-demo/st-input-demo.module').then(m => m.StInputDemoModule) },
   { path: 'item-list-demo', loadChildren: () => import('./st-item-list-demo/st-item-list-demo.module').then(m => m.StItemListDemoModule) },
   { path: 'label-demo', loadChildren: () => import('./st-label-demo/st-label-demo.module').then(m => m.StLabelDemoModule) },
   { path: 'launcher-demo', loadChildren: () => import('./st-launcher-demo/st-launcher-demo.module').then(m => m.StLauncherDemoModule) },
   { path: 'modal-demo', loadChildren: () => import('./st-modal-demo/st-modal-demo.module').then(m => m.StModalDemoModule) },
   { path: 'modal2-demo', loadChildren: () => import('./st-modal2-demo/st-modal2-demo.module').then(m => m.StModal2DemoModule) },
   { path: 'page-title-demo', loadChildren: () => import('./st-page-title-demo/st-page-title-demo.module').then(m => m.StPageTitleDemoModule) },
   { path: 'pagination-demo', loadChildren: () => import('./st-pagination-demo/st-pagination-demo.module').then(m => m.StPaginationDemoModule) },
   { path: 'pop-over-demo', loadChildren: () => import('./st-pop-over-demo/st-pop-over-demo.module').then(m => m.StPopOverDemoModule) },
   { path: 'progress-bar-demo', loadChildren: () => import('./st-progress-bar-demo/st-progress-bar-demo.module').then(m => m.StProgressBarDemoModule) },
   { path: 'radio-demo', loadChildren: () => import('./st-radio-demo/st-radio-demo.module').then(m => m.StRadioDemoModule) },
   { path: 'radio-menu-demo', loadChildren: () => import('./st-radio-menu-demo/st-radio-menu-demo.module').then(m => m.StRadioMenuDemoModule) },
   { path: 'search-demo', loadChildren: () => import('./st-search-demo/st-search-demo.module').then(m => m.StSearchDemoModule) },
   { path: 'select-demo', loadChildren: () => import('./st-select-demo/select-demo.module').then(m => m.StSelectDemoModule) },
   { path: 'sidebar-demo', loadChildren: () => import('./st-sidebar-demo/st-sidebar-demo.module').then(m => m.StSidebarDemoModule) },
   { path: 'spinner-demo', loadChildren: () => import('./st-spinner-demo/st-spinner-demo.module').then(m => m.StSpinnerDemoModule) },
   { path: 'switch-demo', loadChildren: () => import('./st-switch-demo/st-switch-demo.module').then(m => m.StSwitchDemoModule) },
   { path: 'table-demo', loadChildren: () => import('./st-table-demo/st-table-demo.module').then(m => m.StTableDemoModule) },
   { path: 'tag-input-demo', loadChildren: () => import('./st-tag-input-demo/st-tag-input-demo.module').then(m => m.StTagInputDemoModule) },
   { path: 'textarea', loadChildren: () => import('./st-textarea-demo/st-textarea-demo.module').then(m => m.StTextareaDemoModule) },
   { path: 'toggle-buttons-demo', loadChildren: () => import('./st-toggle-buttons-demo/st-toggle-buttons-demo.module').then(m => m.StToggleButtonsDemoModule) },
   { path: 'tooltip-demo', loadChildren: () => import('./st-tooltip-demo/st-tooltip-demo.module').then(m => m.StTooltipDemoModule) },
   { path: 'two-list-selection-demo', loadChildren: () => import('./st-two-list-selection-demo/st-two-list-selection-demo.module').then(m => m.StTwoListSelectionDemoModule) },
   { path: 'vertical-tabs-demo', loadChildren: () => import('./st-vertical-tabs-demo/st-vertical-tabs-demo.module').then(m => m.StVerticalTabsDemoModule) },
   { path: 'zero-page-demo', loadChildren: () => import('./st-zero-page-demo/st-zero-page-demo.module').then(m => m.StZeroPageDemoModule) },
   { path: 'widget-demo', loadChildren: () => import('./st-widget-demo/st-widget-demo.module').then(m => m.StWidgetDemoModule) }
];
// tslint:enable


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
