<template>
    <div class="card">
        <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '/products.json'; // Adjust the path as necessary

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref([]); // Initialize products as an empty array

onMounted(() => {
    ProductService.getProductsMini().then((data) => {
        products.value = data; // Set the fetched data to products
    });
});
</script>

<style>

</style>