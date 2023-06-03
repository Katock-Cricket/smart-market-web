<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData"/>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="curLineChartData" :key=this.flushLineChart />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="28" :sm="28" :lg="12">
        <div class="chart-wrapper">
          <pie-chart :node-data="this.nodeData" :node-names="this.nodeNames" :key="this.flushPieChart"/>
        </div>
      </el-col>
      <el-col :xs="28" :sm="28" :lg="12">
        <div class="chart-wrapper">
          <bar-chart :node-bar-data="this.nodeBarData" :key="flushBarChart"/>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="{span: 64}" :sm="{span: 64}" :md="{span: 64}" :lg="{span: 32}" :xl="{span: 32}"
              style="padding-right:8px;margin-bottom:30px;"
      >
        <transaction-table :list="this.shopList" :key="this.flushList"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import { getNodePurchase, getNodesName, getOverView, getShopList } from '@/api/collabEdge'

const animationDuration = 6000

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart,
    TransactionTable
  },
  mounted() {
    // this.getOverView()
    // this.getNodeNames()
    // this.getShopList()
    this.initOffline()

  },
  data() {
    return {
      lineChartData: {
        newVisits: {
          expectedData: [100, 120, 161, 134, 105, 160, 165],
          actualData: [120, 82, 91, 154, 162, 140, 145]
        },
        messages: {
          expectedData: [200, 192, 120, 144, 160, 130, 140],
          actualData: [180, 160, 151, 106, 145, 150, 130]
        },
        purchases: {
          expectedData: [80, 100, 121, 104, 105, 90, 100],
          actualData: [120, 90, 100, 138, 142, 130, 130]
        },
        shoppings: {
          expectedData: [130, 140, 141, 142, 145, 150, 160],
          actualData: [120, 82, 91, 154, 162, 140, 130]
        }
      },
      curLineChartData: {},
      messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      flushLineChart: 0,

      nodeNames: [],
      nodePurchases: [],
      nodeData: [],
      flushPieChart: 0,

      nodeBarData: [],
      flushBarChart: 0,

      shopList: [],
      flushList: 0
    }
  },
  methods: {
    initOffline() {
      this.curLineChartData = this.lineChartData.newVisits
      this.nodeData = [
        { value: 320, name: '节点1' },
        { value: 240, name: '节点2' },
        { value: 149, name: '节点3' }
      ]
      this.nodeNames = ['节点1', '节点2', '节点3']
      this.nodeBarData = [{
          name: '节点1',
          type: 'bar',
          stack: 'visitors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
        name: '节点2',
          type: 'bar',
          stack: 'visitors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
      }, {
        name: '节点3',
          type: 'bar',
          stack: 'visitors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration
      }]
      this.shopList = [
        {
          name: "通用型电子发泡箱",
          amount: "1",
          price: "100",
        },
        {
          name: "GOOD-140 高压水枪",
          amount: "1",
          price: "134",
        },
        {
          name: "蓝威宝",
          amount: "60",
          price: "25",
        },
        {
          name: "百洁布",
          amount: "19.5",
          price: "10",
        },
        {
          name: "大喷壶",
          amount: "19",
          price: "9",
        },
        {
          name: "小喷壶",
          amount: "19",
          price: "6",
        },
        {
          name: "小垃圾袋",
          amount: "2",
          price: "1",
        },
        {
          name: "大垃圾袋",
          amount: "10",
          price: "1.5",
        },
        {
          name: "运输刀片",
          amount: "50",
          price: "12",
        },
        {
          name: "小铲刀",
          amount: "5",
          price: "15",
        },
        {
          name: "便携式玻璃刀",
          amount: "2",
          price: "34",
        },
        {
          name: "塑料玻璃刷",
          amount: "4",
          price: "19",
        },
        {
          name: "不锈钢刮（35公分）",
          amount: "4",
          price: "20",
        },

      ]
      this.flushList++
      this.flushBarChart++;
      this.flushPieChart++;
      this.flushLineChart++
    },
    handleSetLineChartData(type) {
      this.curLineChartData = this.lineChartData[type]
    },
    getOverView() {
      getOverView().then(res => {
        console.log(res.data)
        this.processOverView(res.data.list)
        this.curLineChartData = this.lineChartData.newVisits
        this.flushLineChart++
      })
    },
    processOverView(data) {
      let actual, expected

      for (let i = 0; i < 7; i++) {

        actual = data[i].visits
        expected = this.generateExp(actual)
        this.lineChartData.newVisits.actualData[i] = actual
        this.lineChartData.newVisits.expectedData[i] = expected

        actual = data[i].purchase
        expected = this.generateExp(actual)
        this.lineChartData.purchases.actualData = actual
        this.lineChartData.purchases.expectedData = expected

        actual = data[i].shoppings
        expected = this.generateExp(actual)
        this.lineChartData.shoppings.actualData = actual
        this.lineChartData.shoppings.expectedData = expected

        this.lineChartData.messages = this.messages
      }
    },
    generateExp(actual) {
      const ram = Math.floor((Math.random() - 0.5) * 20)
      return actual + ram
    },
    getNodeNames() {
      getNodesName().then(res => {
        console.log(res.data)
        this.nodeNames = res.data.nodes
        this.getNodePurchases()
        while (this.nodePurchases.length !== this.nodeNames.length) {
        }

        for (let pur in this.nodePurchases) {
          let value = 0
          for (let val in pur.list) {
            value += val
          }
          this.nodeData.push({
            value: value,
            name: pur.name
          })
        }
        this.flushPieChart++
        this.processBarChart()
      })
    },
    getNodePurchases() {
      for (let nodeName in this.nodeNames) {
        getNodePurchase({ node: nodeName }).then(res => {
          console.log(res.data)
          this.nodePurchases.push({
            name: nodeName,
            list: res.data.list
          })
        })
      }
    },
    processBarChart() {
      for (let pur in this.nodePurchases) {
        const nodeName = pur.name
        const purList = pur.list
        this.nodeBarData.push({
          name: nodeName,
          type: 'bar',
          stack: '销售额',
          barWidth: '60%',
          data: purList,
          animationDuration
        })
      }
    },
    getShopList() {
      getShopList().then(res => {
        console.log(res.data)
        this.shopList = res.data.list
        this.flushList++
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1280px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
