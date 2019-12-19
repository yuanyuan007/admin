import Vue from 'vue';
import loding from 'components/extendComponent/loding/index.js';
import vkinput from 'components/extendComponent/input/vkinput.vue';
import warrpTemp from 'components/warrpTemp/warrpTemp.vue';
export default {
  loding,
  vkinput,
  warrpTemp
}

import {
  Pagination, // 分页
  // Dropdown, // 下拉组件
  // DropdownMenu,
  // DropdownItem,
  // Menu, //导航组件
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  // Table,
  // TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  Breadcrumb, //面包屑
  BreadcrumbItem,
  Form,
  FormItem,
  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  Alert,
  // Slider,
  Icon,
  Row,
  Col,
  // Upload,
  MessageBox,
  Message,
  Notification,
  Drawer // 抽屉
} from 'element-ui';
Vue.use(Drawer);
Vue.use(Pagination);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
// Vue.use(DatePicker);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(Tree);
Vue.use(Alert);
// Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
// Vue.use(Upload);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;