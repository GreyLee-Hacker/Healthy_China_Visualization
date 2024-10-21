<template>
  <div>
    <h2>国家政策数据</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>描述</th>
          <th>日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="policy in policies" :key="policy.id">
          <td>{{ policy.id }}</td>
          <td>{{ policy.name }}</td>
          <td>{{ policy.description }}</td>
          <td>{{ policy.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { policies } from '../data';

export default {
  name: 'PolicyTable',
  data() {
    return {
      policies
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>