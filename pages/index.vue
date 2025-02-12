<template>
    <div class="px-5 mt-8">
        <div>
            <div class="flex justify-between">
                <div>
                    <div class="text-blue-500 font-semibold">Statements For</div>
                    <div class="text-xs text-gray-400">{{ formatDate(startDate) }} to {{ formatDate(endDate) }} </div>

                </div>
                <div class="flex">
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
                                    style="padding:3px; display:flex; justify-content:space-between">
                                    <Button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                                    <Button label="Remove All" severity="danger" text size="small" icon="pi pi-times"
                                        @click="clearAllColumns" />
                                </div>
                            </template> -->
                        </MultiSelect>
                    </div>
                    <div class="card flex justify-center" style="padding-left:10px">
                        <Button type="button" icon="pi pi-ellipsis-v" @click="toggleMenu" aria-haspopup="true"
                            severity="secondary" aria-controls="overlay_menu" />
                        <Menu ref="menu" id="overlay_menu" :model="menus" :popup="true" />
                    </div>
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
                                    <div class="card flex justify-center gap-2 px-5">
                                        <FloatLabel class="  py-2">
                                            <DatePicker v-model="startDate" inputId="over_label" showIcon
                                                iconDisplay="input" @focus="onDatePickerFocus" @blur="onDatePickerBlur"
                                                placeholder="Start Date" />


                                            <!-- <label for="over_label" class="">Start Date</label> -->
                                        </FloatLabel>
                                        <FloatLabel class=" w-[200px] py-2">
                                            <DatePicker v-model="endDate" inputId="over_label" showIcon
                                                iconDisplay="input" @focus="onDatePickerFocus" @blur="onDatePickerBlur"
                                                placeholder="End Date" />



                                        </FloatLabel>
                                    </div>
                                    <div class="flex justify-end text-end  p-3">
                                        <div class="text-blue-700 text-sm font-bold" @click="applyCustomDateFilter">
                                            APPLY</div>
                                    </div>
                                </div>

                            </div>
                        </Popover>
                        <!-- <InputText type="text" v-model="value" @click="openpopover" placeholder="Selected Date Range"
                            class="" style="margin-left: 10px;" /> -->
                        <Button type="button" icon="pi pi-calendar-plus" @click="openpopover" aria-haspopup="true"
                            severity="secondary" aria-controls="overlay_menu" style="margin-left: 10px;" />
                    </div>
                </div>

            </div>

            <ul role="list" class="grid  gap-2 grid-cols-2 lg:grid-cols-2 pt-4">
                <li class="col-span-1 rounded-lg bg-white shadow p-2">
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

                <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow text-sm p-2">
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

                <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow text-sm p-2">
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

                <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-2">
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
            <div class="flex justify-end p-2 border border-b-0 mt-5">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText v-model="searchQuery" placeholder="Search" @input="filterProducts" size="small" />
                </IconField>
            </div>
            <div class="card border">
                <div>
                    <DataTable v-model:selection="selectedProduct" :value="filteredProducts" :dataKey="id"
                        :totalRecords="filteredProducts.length" paginator :rows="rowsPerPage" size="small"
                        @row-click="navigateToProductDetail" scrollable scrollHeight="550px"
                        class="text-xs md:text-sm py-2">
                        <Column selectionMode="multiple"></Column>
                        <Column v-for="col in selectedColumns" :key="col.field" :field="col.field" :header="col.header"
                            :sortable="true">
                            <template #body="slotProps">
                                <div v-if="col.field === 'action'" style="display: flex;">
                                    <!-- <Button icon="pi pi-check" @click="handleDrawerClick(slotProps.data)"
                                        severity="secondary" size="small" rounded
                                        style="margin: 2px; margin-left:0px !important;" />
                                    <Button icon="pi pi-bookmark" @click="callnewvalue" severity="secondary"
                                        size="small" rounded style="margin: 2px; padding:2px !important;" /> -->
                                    <Button icon="pi pi-eye" @click="handleDrawerClick(slotProps.data)"
                                        severity="secondary" size="small" rounded
                                        style="margin: 2px; padding:2px !important;" />
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
                        <template #empty> No products found. </template>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>

    <Drawer v-model:visible="visibleRight" position="right" :style="{ width: '80%' }">
        <template #header>
            <!-- Leave this empty to remove the header -->
        </template>
        <DrawerContent :leadData="selectedLeadData" />
    </Drawer>

    <Toast />
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import Menu from 'primevue/menu';
import Toast from 'primevue/toast';
import Drawer from 'primevue/drawer';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

const products = ref([]);
const selectedProduct = ref([]);
const searchQuery = ref('');
const rowsPerPage = ref(10);
const visibleRight = ref(false);

const menu = ref(null);
const startDate = ref(new Date()); // Set the initial value to today's date
const endDate = ref(new Date());   // Set the initial value to today's date
const dateFilter = ref(null);
const value = ref('');
const selectedLeadData = ref(null);
const selectedColumns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'date', header: 'Date' },
    { field: 'action', header: 'Action' }
]);

// Columns and other variables
const columns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'date', header: 'Date' },
    { field: 'action', header: 'Action' }
]);
const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};



const setDateFilter = (filter) => {
    const now = new Date();
    let startDate, endDate;
    
    // Create fresh instances of dates to avoid mutation of the 'now' object.
    const start = new Date(now);
    const end = new Date(now);
    
    if (filter === 'week') {
        start.setDate(now.getDate() - 7);
    } else if (filter === '15days') {
        start.setDate(now.getDate() - 15);
    } else if (filter === 'month') {
        start.setMonth(now.getMonth() - 1);
    } else if (filter === '3months') {
        start.setMonth(now.getMonth() - 3);
    } else if (filter === 'year') {
        start.setFullYear(now.getFullYear() - 1);
    } else if (filter === '6months') {
        start.setMonth(now.getMonth() - 6);
    } else if (filter === 'ytd') {
        start.setMonth(0);
        start.setDate(1);
    }
    
    dateFilter.value = { start: start, end: end };
    console.log(`Filter applied from ${start.toLocaleDateString()} to ${end.toLocaleDateString()}`);
};


const onDatePickerFocus = () => {
    console.log('Date picker focused');
};

const onDatePickerBlur = () => {
    console.log('Date picker blurred');
};

const toggleMenu = (event) => {
    menu.value.toggle(event);
};
const op = ref();

const openpopover = (event) => {
    op.value.toggle(event);
};

const formatCurrency = (value) => {
    if (typeof value !== 'number') return value;
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const formatDateToYYYYMMDD = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const filteredProducts = computed(() => {
    let filtered = products.value;

    // if (dateFilter.value) {
    //     const { start, end } = dateFilter.value;
    //     const startDateStr = start.toLocaleDateString('en-US');
    //     const endDateStr = end.toLocaleDateString('en-US');

    //     filtered = filtered.filter(product => {
    //         const productDate = new Date(product.date);
    //         const productDateStr = productDate.toLocaleDateString('en-US');
    //         return productDateStr >= startDateStr && productDateStr <= endDateStr;
    //     });
    // }
    if (dateFilter.value) {
        const { start, end } = dateFilter.value;
        console.log(`Filtering from ${start} to ${end}`); // Debugging line
        filtered = filtered.filter(product => {
            const productDate = new Date(product.date);
            return productDate >= start && productDate <= end; // Ensure correct comparison
        });
    }


    if (searchQuery.value) {
        filtered = filtered.filter(product => {
            return Object.values(product).some(value =>
                String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });
    }

    return filtered;
});

const applyCustomDateFilter = () => {
    if (startDate.value && endDate.value) {
        const startDateStr = startDate.value.toLocaleDateString('en-US');
        const endDateStr = endDate.value.toLocaleDateString('en-US');
        value.value = `${startDateStr} to ${endDateStr}`;

        dateFilter.value = { start: startDate.value, end: endDate.value };

        op.value.toggle(event);
        console.log('Custom Date Filter Applied:', dateFilter.value);
    }
};


const handleDrawerClick = (product) => {
    selectedLeadData.value = product;
    visibleRight.value = true;
};

const clearFilter = () => {
    searchQuery.value = '';
};

const selectedItemTemplate = (selected) => {
    return selected.length ? 'Select Column' : 'Select Columns';
};

onMounted(() => {
    debugger
    ProductService.getProductsMini().then((data) => {
        products.value = data;
    });
});

const menus = ref([
    {
        label: 'Export',
        icon: 'pi pi-upload',
        command: () => exportData()
    },
    {
        label: 'Refresh',
        icon: 'pi pi-refresh',
        command: () => refreshData()
    }
]);

const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + products.value.map(e => Object.values(e).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
};

const refreshData = () => {
    if (typeof fetchProducts === 'function') {
        fetchProducts();
    }
};
</script>


<style>
.p-drawer-content {
    flex-grow: none !important;
    overflow-y: none !important;
    padding: 10px !important;
}

.p-drawer-header {
    display: none !important;
}

.p-multiselect-dropdown {
    background: #F1F5F9 !important;
    color: gray !important;
    display: none !important;
}

.p-multiselect-label-container {
    background: #F1F5F9 !important;

}

.p-multiselect {
    border: none !important;
}
</style>