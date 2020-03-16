<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" :unique-opened="false" router>
      <template v-for="item in items">
        <!-- -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <!-- -->
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item class="secound_menu" v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
export default {
  components: {
    elMenu: Menu,
    elSubmenu: Submenu,
    elMenuItem: MenuItem,
    elMenuItemGroup: MenuItemGroup
  },
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-menu',
          title: '首页',
          index: '/homePage',
        },
        {
          icon: 'el-icon-user-solid',
          title: '公司信息',
          index: '1',
        },
        {
          icon: 'el-icon-user-solid',
          title: '产品配置',
          index: '1',
        },
        {
          icon: 'el-icon-truck',
          title: '账单管理',
          index: '6',
          subs: [
            {
              title: '预约账单',
              index: '/vehicle',

            },
            {
              title: '现场账单',
              index: '/selectInAndOut',

            }
          ]
        },
        {
          icon: 'el-icon-s-custom',
          title: '权限管理',
          index: '2',
          subs: [
            {
              title: '员工管理',
              index: '/vehicle',
            },
            {
              title: '角色管理',
              index: '/selectInAndOut',
            }
          ]
        },
        {
          icon: 'el-icon-bank-card',
          title: '退款管理',
          index: '3'
        },
        {
          icon: 'el-icon-bank-card',
          title: '缴费记录',
          index: '3'
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%;
}
.secound_menu {
  padding-left: 55px !important;
}
.third_menu {
  padding-left: 75px !important;
}
</style>
