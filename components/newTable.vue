


<template>
    <div class="px-5  h-screen overflow-hidden">
        <div v-if="loading" class="flex justify-center items-center align-center min-h-screen ">
            <ProgressSpinner style="width: 100px; height: 100px" strokeWidth="5" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" class="my-10" />
        </div>
        <div class=" my-7" v-else>
            <div style="display: flex; justify-content: space-between; align-items: center;margin-inline: 20px;">
                <div>
                    <div class="text-blue-500 font-semibold text-xl">Statements For</div>
                    <div class="text-sm text-gray-400">{{ formatDate(startDate) }} to {{ formatDate(endDate) }} </div>

                </div>

                <div style="display: flex; align-items: center;">
                    <!-- <Button type="button" icon="pi pi-sync" label="" outlined @click="clearFilter"
                        severity="secondary" /> -->
                    <div>
                        <div style="padding-left: 10px; text-align: left;">
                            <MultiSelect v-model="selectedColumns" :options="columns" optionLabel="header" filter
                                :maxSelectedLabels="1" class="w-10 bg-gray-100"
                                :selectedItemTemplate="selectedItemTemplate">
                                <template #value>
                                    <i class="pi pi-objects-column"
                                    style="color: slateblue;padding-top: 4px;padding-bottom:4px ;"></i>
                                </template>
                                <!-- <template #footer>
                                    <div class="p-3 flex justify-between"
                                        style="padding:3px;display:flex;justify-content:space-between">
                                        <Button label="Add New" severity="secondary" text size="small"
                                            icon="pi pi-plus" />
                                        <Button label="Remove All" severity="danger" text size="small"
                                            icon="pi pi-times" @click="clearAllColumns" />
                                    </div>
                                </template> -->
                            </MultiSelect>
                        </div>
                    </div>

                    <!-- <div style="padding-left: 10px;">
                        <MultiSelect v-model="selectedCategories" :options="categoryOptions" optionLabel="name" filter
                            display="chip" size="small" placeholder="Select Categories" class="w-full sm:w-64">
                        </MultiSelect>
                    </div> -->
                    <div>
                        <Popover ref="op">
                            <div class="d-flex align-items-center">
    <i class="pi pi-clock p-2"></i>
    <span class="p-1">Frequently used time period</span>
</div>

                            <div>

                                <div class="card px-4">
                                    <div class="flex px-2 py-2 gap-2">
                                        <Button label="Week" size="small" class="flex-button" severity="secondary"
                                            @click="setDateFilter('week')" />
                                        <Button label="15 days" size="small" class="flex-button" severity="secondary"
                                            @click="setDateFilter('15days')" />
                                        <Button label="Month" size="small" class="flex-button" severity="secondary"
                                            @click="setDateFilter('month')" />
                                    </div>
                                    <div class="flex px-2 py-2 gap-2">
                                        <Button label="3 months" size="small" class="flex-button" severity="secondary"
                                            @click="setDateFilter('3months')" />
                                        <Button label="Year" size="small" class="flex-button" severity="secondary"
                                            @click="setDateFilter('year')" />
                                        <Button label="Last 6 Months" size="small" class="flex-button"
                                            severity="secondary" @click="setDateFilter('6months')" />
                                    </div>
                                    <div class="flex px-2 py-2 gap-2">
                                        <Button label="Year till date" size="small" class="flex-button"
                                            severity="secondary" @click="setDateFilter('ytd')" />
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
    <i class="pi pi-file-edit p-2"></i>
    <span class="p-1">Custom</span>
</div>
                  
                                <div>
                                    <div class="card flex flex-wrap justify-center items-end gap-2 px-2">
                                        <FloatLabel class=" w-[200px] py-2">
                                            <DatePicker v-model="startDate" inputId="over_label" showIcon
                                                iconDisplay="input" @focus="onDatePickerFocus"
                                                @blur="onDatePickerBlur" placeholder="Start Date"/>


                                            <!-- <label for="over_label" class="">Start Date</label> -->
                                        </FloatLabel>
                                        <FloatLabel class=" w-[200px] py-2">
                                            <DatePicker v-model="endDate" inputId="over_label" showIcon
                                                iconDisplay="input" @focus="onDatePickerFocus"
                                                @blur="onDatePickerBlur" placeholder="End Date" />


                                           
                                        </FloatLabel>
                                    </div>
                                    <div class="flex justify-end text-end  p-3">
                                        <div class="text-blue-700 text-sm font-bold" @click="applyCustomDateFilter">APPLY</div>
                                    </div>
                                </div>

                            </div>
                        </Popover>
                        <!-- <InputText type="text" v-model="value" @click="openpopover" placeholder="Selected Date Range"
                            class="" style="margin-left: 10px;" /> -->
                            <Button type="button" icon="pi pi-calendar-plus" @click="openpopover" aria-haspopup="true"
                            severity="secondary" aria-controls="overlay_menu" style="margin-left: 10px;" />

                    </div>
                    <div class="card flex justify-center" style="padding-left:10px">
                        <Button type="button" icon="pi pi-ellipsis-v" @click="togglemenu" aria-haspopup="true"
                            severity="secondary" aria-controls="overlay_menu" />
                        <Menu ref="menu" id="overlay_menu" :model="menus" :popup="true" />
                    </div>
                </div>
            </div>
            <ul role="list" class="grid  gap-2 grid-cols-2 lg:grid-cols-4 px-5 py-3">
                <li class="col-span-1 rounded-lg bg-white shadow p-2 border">
                    <div class="flex w-full items-center justify-between space-x-6 text-sm ">
                        <div class="flex truncate">
                            <div class="flex justify-center items-center ">
                                <img src="https://cdn-icons-png.flaticon.com/128/16416/16416833.png" alt="" class=" p-2 bg-indigo-50 rounded-full" height="60"
                                width="60" >
                            </div>
                            <div class="w-full p-1 mt-2 ">
                                <span class="text-slate-400 text-md font-semibold">Invested Amount</span>
                                <p class="text-slate-500 text-sm font-bold"> <span>₹</span>
                                    <span class="px-1">4000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow text-sm p-2 border">
                    <div class="flex w-full items-center justify-between space-x-6 text-sm ">
                        <div class="flex truncate">
                            <div class="flex justify-center items-center  ">
                                <img src="https://cdn-icons-png.flaticon.com/128/16416/16416833.png" alt="" class=" p-2 bg-indigo-50 rounded-full" height="60"
width="60"                                   >
                            </div>
                            <div class="w-full p-1 mt-2 ">
                                <span class="text-slate-400 text-md font-semibold">Current Value</span>
                                <p class="text-slate-500 text-sm font-bold"> <span>₹</span>
                                    <span class="px-1">4000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow text-sm p-2 border">
                    <div class="flex w-full items-center justify-between space-x-6 ">
                        <div class="flex truncate">
                            <div class="flex justify-center items-center  ">
                                <img src="https://cdn-icons-png.flaticon.com/128/5501/5501360.png" alt="" class=" p-2 bg-indigo-50 rounded-full" height="80"
                                width="80" >
                            </div>
                            <div class="w-full p-1 mt-2 ">
                                <span class="text-slate-400 text-md font-semibold">Overall Gain</span>
                                <p class="text-slate-500 text-sm font-bold"> <span>₹</span>
                                    <span class="px-1">4000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-2 border">
                    <div class="flex w-full items-center justify-between space-x-6 text-sm">
                        <div class="flex truncate">
                            <div class="flex justify-center items-center ">
                                <img src="https://cdn-icons-png.flaticon.com/128/5501/5501360.png"alt="" class=" p-2 bg-indigo-50 rounded-full" height="80"
                                width="80" >
                            </div>
                            <div class="w-full p-1 mt-2 ">
                                <span class="text-slate-400 text-md font-semibold">Today's Gain</span>
                                <p class="text-slate-500 text-sm font-bold"> <span>₹</span>
                                    <span class="px-1">4000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="card" style="margin: 20px;">
                <div style="max-height: 700px; overflow: auto;">
                    <div class="flex justify-end border botder-b-0 p-5">
                    <IconField style="padding-left: 10px;" >
                        <InputIcon>
                            <i class="pi pi-search" style="margin-left: 6px;" />
                        </InputIcon>
                        <InputText v-model="searchQuery" placeholder="Search" @input="filterProducts" class="w-[400px]" />
                    </IconField>
                </div>
                <div class="border-x my-2">
                    <DataTable v-model:selection="selectedProduct" :value="filteredProducts" :dataKey="id"
                        :totalRecords="filteredProducts.length" paginator :rows="rowsPerPage"
                        tableStyle="min-width: 50rem" size="small" @row-click="navigateToProductDetail" scrollable
                        scrollHeight="390px" >
                        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                        <Column v-for="col in selectedColumns" :key="col.field" :field="col.field" :header="col.header"
                            :sortable="true">
                            <template #body="slotProps">
                                <div v-if="col.field === 'action'" style="display: flex;">
                                    <Button icon="pi pi-check" @click="handleDrawerClick(slotProps.data)" severity="secondary"
                                        size="small" rounded style="margin: 2px;margin-left:0px !important;" />
                                    <Button icon="pi pi-bookmark" @click="callnewvalue" severity="secondary"
                                        size="small" rounded style="margin: 2px;padding:2px !important;" />
                                    <Button icon="pi pi-user"  @click="handleUserClick(slotProps.data)" 
                                    severity="secondary"
                                        size="small" rounded style="margin: 2px;padding:2px !important;" />
                                </div>
                                <div v-else>
                                    {{ col.field === 'price'
                                        ? formatCurrency(slotProps.data.price)
                                        : col.field === 'date'
                                            ? new Date(slotProps.data.date).toLocaleDateString()
                                    : slotProps.data[col.field] }}
                                </div>
                            </template>
                        </Column>
                        <template #empty> No customers found. </template>
                        <template #paginatorstart>
    <div style="display: flex; padding: 5px;">
        <Button v-for="size in [10, 20,30,40,50]" :key="size" :label="size" @click="changeRowsPerPage(size)"
            :class="{ 'p-button-primary': rowsPerPage === size, 'p-button-outlined': rowsPerPage !== size }" severity="secondary"  class="gap-2 mx-2 flex justify-start text-start"/>
    </div>
</template>

                    </DataTable>
                </div>


                </div>
            </div>
        </div>
        <Drawer v-model:visible="visibleRight" position="right" :style="{ width: '80%' }">
    <template #header>
        <!-- Leave this empty to remove the header -->
    </template>
    <DrawerDesktop :leadData="selectedLeadData" />
</Drawer>

        <Toast />
       
    </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Paginator from 'primevue/paginator';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import ConfirmPopup from 'primevue/confirmpopup';
import Menu from 'primevue/menu';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Drawer from 'primevue/drawer';
import { useConfirm } from "primevue/useconfirm";
import DatePicker from 'primevue/datepicker';
import { defineEmits } from 'vue';
import 'primeicons/primeicons.css'
const startDate = ref(null);
const endDate = ref(null);
const dateFilter = ref(null);
const confirm = useConfirm();
const visibleRight = ref(false);
const toast = useToast();
const router = useRouter();
const products = ref([]);
const selectedProduct = ref([]);
const searchQuery = ref('');
const sortField = ref('price');
const sortOrder = ref(1);
const rowsPerPage = ref(5);
const currentPage = ref(0);
const menu = ref();
const value = ref('');
const selectedLeadData = ref(null);


const emit = defineEmits([]);
const handleMenuAction = (action) => {
    if (action === 'export') {
        exportCSV();
    } else if (action === 'refresh') {
        clearFilter();
    }
};
const changeRowsPerPage = (size) => {
    rowsPerPage.value = size;
    currentPage.value = 0; // Reset to the first page whenever rows per page is changed
};

const selectedColumns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'date', header: 'Date' },
    { field: 'action', header: 'Action' }
]);
const handleUserClick = (product) => {
 
    console.log(selectedLeadData,"selectedLeadData");
    navigateToProductDetail(product);
};
const formatDate = (date) => {
    if (!date) {
        return ''; // Return an empty string if the date is null or undefined
    }
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};
const columns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'date', header: 'Date' },
    { field: 'action', header: 'Action' }
]);

const categoryOptions = ref([
    { name: 'Category A', value: 'Category A' },
    { name: 'Category B', value: 'Category B' },
    { name: 'Category C', value: 'Category C' }
]);
const selectedItemTemplate = (selected) => {
    return selected.length ? 'Select Column' : 'Select Columns';
}
const navigateToProductDetail = (product) => {
    debugger
    emit('product-selected', product);
};
// const setRowsPerPage = (value) => {
//   rowsPerPage.value = value;
//   currentPage.value = 0; // Reset to the first page whenever rows per page is changed
// };


// const onPageChange = (event) => {
//     currentPage.value = event.page; // Update the page number
//     rowsPerPage.value = event.rows; // Update the rows per page when changed from the paginator
// };


const handleDrawerClick = (product) => {
    selectedLeadData.value = product; // Set the selected lead data
    visibleRight.value = true; // Open the drawer
};
const selectedCategories = ref([]);
const filteredProducts = computed(() => {
    let filtered = products.value;
    debugger

    // Search Filter
    if (searchQuery.value) {
        filtered = filtered.filter(product => {
            return Object.values(product).some(value =>
                String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });
    }

    // Category Filter
    if (selectedCategories.value.length > 0) {
        const selectedCategoryValues = selectedCategories.value.map(category => category.value);
        filtered = filtered.filter(product => selectedCategoryValues.includes(product.category));
    }

    // Date Filter
    if (dateFilter.value) {
        filtered = filtered.filter(product => {
            const productDate = new Date(product.date);
            const isInDateRange = productDate >= dateFilter.value.start && productDate <= dateFilter.value.end;
            console.log(`Product ${product.name} date: ${product.date}, In Date Range: ${isInDateRange}`);
            return isInDateRange;
        });
    }

    // Sort Filter
    filtered.sort((a, b) => {
        const modifier = sortOrder.value === 1 ? 1 : -1;
        if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
        if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
        return 0;
    });

    // Pagination Logic


    return filtered;
});



const fetchProducts = async () => {
    debugger
    try {
        const response = await fetch('/products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products.value = await response.json();
        console.log('Fetched Products:', products.value); // Log the fetched products
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
};
const callnewvalue = async () => {
  const api = 'https://teamo.gwcindia.in/json-check/cache-redis.php?file=gowtham';

  try {
    const res = await fetch(api, {
      method: 'GET',
    });

    if (!res.ok) throw new Error("HTTPerror! Status:");

   
    showToast = true; 
    // Set the toast message and type for success
    toastMessage = "API call was successful!";
    toastType = "success";  // You can define types in your Toast component
      // Show the toast

    // Hide the toast after 3 seconds (optional)
    setTimeout(() => {
     showToast = false;
    }, 3000);

  } catch (error) {
    console.error("Error:", error.message);

    // Set the toast message and type for error
    toast.add({ severity: 'success', summary: 'Done', detail: 'API Called Succefully !', life: 3000 });

    // Hide the toast after 3 seconds (optional)
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
};

const isInteractingWithDatePicker = ref(false);

const onDatePickerFocus = () => {
    isInteractingWithDatePicker.value = true;
};

const onDatePickerBlur = () => {
    isInteractingWithDatePicker.value = false;
};
const op = ref();


const openpopover = (event) => {
    op.value.toggle(event);
};


const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const loading = ref(true);
onMounted(() => {
    fetchProducts();
    const now = new Date();
    startDate.value = new Date(now.setDate(now.getDate() - 7)); // Set start date to 7 days ago
    endDate.value = new Date(); // Set end date to today
    setDateFilter('week');
    setTimeout(() => {
        loading.value = false; // Hide the spinner after 2 seconds
    }, 2000);
});
const togglemenu = (event) => {
    menu.value.toggle(event);
};


const menus = ref([
    {
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh',
                command: () => handleMenuAction('refresh') // Call handleMenuAction for refresh
            },
            {
                label: 'Export',
                icon: 'pi pi-upload',
                command: () => handleMenuAction('export') // Call handleMenuAction for export
            }
        ]
    }
]);

const clearFilter = () => {
    searchQuery.value = '';
    selectedCategories.value = [];
    dateFilter.value = null;
 
    value.value = '';
    startDate.value = new Date(now.setDate(now.getDate() - 7)); // Set start date to 7 days ago
    endDate.value = new Date();
};
const exportCSV = () => {
    const dataToExport = filteredProducts.value.map(product => {
        const exportedData = {};
        selectedColumns.value.forEach(col => {
            exportedData[col.header] = product[col.field];
        });
        return exportedData;
    });
    const csv = convertToCSV(dataToExport);
    downloadCSV(csv);
};

const convertToCSV = (data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(header => row[header]).join(','));

    return [headers.join(','), ...rows].join('\n');
};

const downloadCSV = (csv) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'products.csv';
    link.click();
};

const setDateFilter = (filter) => {
    const now = new Date();
    if (filter === 'week') {
        startDate.value = new Date(now.setDate(now.getDate() - 7));
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    } else if (filter === '15days') {
        startDate.value = new Date(now.setDate(now.getDate() - 15));
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    } else if (filter === 'month') {
        startDate.value = new Date(now.setMonth(now.getMonth() - 1));
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    } else if (filter === '3months') {
        startDate.value = new Date(now.setMonth(now.getMonth() - 3));
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    } else if (filter === 'year') {
        startDate.value = new Date(now.setFullYear(now.getFullYear() - 1));
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    } else if (filter === '6months') {
        startDate.value = new Date(now.setMonth(now.getMonth() - 6));
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    } else if (filter === 'ytd') {
        startDate.value = new Date(now.getFullYear(), 0, 1);
        endDate.value = new Date();
        dateFilter.value = { start: startDate.value, end: endDate.value };
    }
};

const applyCustomDateFilter = () => {
    if (startDate.value && endDate.value) {
        const startDateStr = startDate.value.toLocaleDateString('en-US');
        const endDateStr = endDate.value.toLocaleDateString('en-US');
        value.value = `${startDateStr} to ${endDateStr}`;
        dateFilter.value = { start: startDate.value, end: endDate.value };
        if (op.value) {
            op.value.toggle(); // Only call toggle if op.value is defined
        }
        console.log('Date Filter Applied:', dateFilter.value);
    }
};


</script>

<style >
.p-drawer-content{
    flex-grow: none !important;
    overflow-y:none !important;
    padding-left: none !important;
    padding-right:none !important;
    padding-top: 10px !important;
    padding-bottom: none !important;
}
.p-drawer-header {
    display: none !important;
    flex-shrink: 0;
    align-items: none ;
    justify-content: space-between;
    padding: 0px !important;
}
</style>