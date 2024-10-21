<template>
    <div class="home">
        <header class="header">
            <h1 class="title">健康中国建设追踪评估</h1>
            <p class="subtitle">探索国家健康政策的多维度数据分析</p>
        </header>
        <div class="module-grid">
            <router-link v-for="module in modules" :key="module.name" :to="module.path" class="module-card">
                <div class="module-icon">
                    <i :class="module.icon"></i>
                </div>
                <h3 class="module-title">{{ module.name }}</h3>
                <p class="module-description">{{ module.description }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            modules: [
                { name: '基础数据', path: '/basic-data', icon: 'fas fa-database', description: '查看项目的核心数据统计' },
                { name: '评估指标', path: '/evaluation-indicators', icon: 'fas fa-chart-line', description: '探索多层面的评估指标体系' },
                { name: '中央维度', path: '/central-dimension', icon: 'fas fa-building', description: '分析国家层面的年度评估结果' },
                { name: '省级维度', path: '/provincial-dimension', icon: 'fas fa-map-marked-alt', description: '比较31个省市的评估数据' },
                { name: '部门维度', path: '/department-dimension', icon: 'fas fa-sitemap', description: '了解各部门的政策实施情况' },
                { name: '行动维度', path: '/action-dimension', icon: 'fas fa-tasks', description: '评估15项重点行动的进展' },
                { name: '部门协同网络', path: '/department-network', icon: 'fas fa-network-wired', description: '可视化部门间的协作关系' },
                { name: '政策树', path: '/policy-tree', icon: 'fas fa-tree', description: '追踪政策的演变和发展历程' },
            ]
        }
    }
}
</script>

<style scoped>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f5f7fa;
}

.header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: linear-gradient(135deg, #3498db, #2980b9);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
    font-size: 1.2rem;
    color: #ecf0f1;
}

.module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.module-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none;
    color: #2c3e50;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
}

.module-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: #3498db;
}

.module-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #3498db;
    transition: all 0.3s ease;
}

.module-card:hover .module-icon {
    transform: scale(1.1);
}

.module-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.module-description {
    font-size: 0.9rem;
    color: #7f8c8d;
    line-height: 1.4;
}
</style>
