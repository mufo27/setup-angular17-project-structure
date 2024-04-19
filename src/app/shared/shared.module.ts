import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Components Form shared/components/
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';

// Import Module Form PrimeNG

// Components In Form
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputOtpModule } from 'primeng/inputotp';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TreeSelectModule } from 'primeng/treeselect';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ToggleButtonModule } from 'primeng/togglebutton';

// Components In Button
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';

// Components In Data
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

// Components In Panel
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { StepperModule } from 'primeng/stepper';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

// Components In Overlay
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

// Components In File
import { FileUploadModule } from 'primeng/fileupload';

// Components In Menu
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DockModule } from 'primeng/dock';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';

// Components In Chart
import { ChartModule } from 'primeng/chart';

// Components In Messages
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

// Components In Media
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

// Components In DrangDrop
import { DragDropModule } from 'primeng/dragdrop';

// Components In Misc
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { ChipModule } from 'primeng/chip';
import { InplaceModule } from 'primeng/inplace';
import { MeterGroupModule } from 'primeng/metergroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';

// Components In Directives
import { DeferModule } from 'primeng/defer';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

// Components In Utilities


@NgModule({
  declarations: [
    TestAComponent,
    TestBComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    // AutoCompleteModule,
    // CalendarModule,
    // CascadeSelectModule,
    // CheckboxModule,
    // ChipsModule,
    // ColorPickerModule,
    // DropdownModule,
    // EditorModule,
    // FloatLabelModule,
    // IconFieldModule,
    // InputIconModule,
    // InputGroupModule,
    // InputGroupAddonModule,
    // InputMaskModule,
    // InputSwitchModule,
    // InputTextModule,
    // InputTextareaModule,
    // InputNumberModule,
    // InputOtpModule,
    ButtonModule
  ],
  exports: [
    TestAComponent,
    TestBComponent,

    CommonModule,
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    // AutoCompleteModule,
    // CalendarModule,
    // CascadeSelectModule,
    // CheckboxModule,
    // ChipsModule,
    // ColorPickerModule,
    // DropdownModule,
    // EditorModule,
    // FloatLabelModule,
    // IconFieldModule,
    // InputIconModule,
    // InputGroupModule,
    // InputGroupAddonModule,
    // InputMaskModule,
    // InputSwitchModule,
    // InputTextModule,
    // InputTextareaModule,
    // InputNumberModule,
    // InputOtpModule,
    ButtonModule
  ]
})
export class SharedModule { }
