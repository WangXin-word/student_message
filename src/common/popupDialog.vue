<!--
 * @Author: wyy
 * @Date: 2022-09-13 01:18:32
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-10-13 12:12:23
 * @LastEditors: wyy
 * @Description: 
 * @FilePath: /student_sys_vue/src/common/popupDialog.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="28%"
    :before-close="handleClose"
  >
    <!-- 中间内容 start -->
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <template v-for="(item, index) in formLabelAlign.item">
        <el-form-item :key="index" prop="item.inputContent">
          <span slot="label">
            {{ item.name }}
          </span>
          <!-- 单选框 start -->
          <span v-if="!item.isSelectItem && !item.isSelect">
            <el-input v-model="item.inputContent" autocomplete="off" :placeholder="item.placeholderContent"></el-input>
          </span>
          <!-- 单选框 end -->

          <!-- 下拉框 单选框 start -->
          <span v-if="!item.isSelectItem && item.isSelect">
            <el-select v-model="item.inputContent" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </span>
          <!-- 下拉框 单选框 end -->

          <!-- 下拉框 多选框 start -->
          <span v-if="item.isSelectItem && !item.isSelect">
            <el-select v-model="item.inputContent" multiple placeholder="请选择" style="width:100%">
              <el-option
                v-for="cont in item.selectItem"
                :key="cont.id"
                :label="cont.name"
                :value="cont.id"
              >
              </el-option>
            </el-select>
          </span>
          <!-- 下拉框 多选框 end -->
        </el-form-item>
      </template>
    </el-form>
    <!-- 中间内容 end -->

    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { Dialog, Button, Form, FormItem, Input, Select, Option} from "element-ui";
export default {
  /**
   * formLabelAlign ----> 传递过来的数据
   * dialogVisible ----->  显示和隐藏
   * title -------> 标题
   * selectItem -----> 多选传递过来的下拉框数据
   * select ------> 单选传递过来的下拉框数据
   */
  props: {
    formLabelAlign: {
      type: Object,
      default: () => {
        // name:""
      },
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "新增",
    },
  },
  data() {
    return {
      labelPosition: "right",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          //   done();
          this.$emit("closePopup");
        })
        .catch((_) => {});
    },
    close() {
      this.$emit("closePopup");
    },
    submit() {
        this.$emit("submit",this.formLabelAlign)
    },
  },
  components: {
    elDialog: Dialog,
    elButton: Button,
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSelect: Select,
    elOption: Option,
  },
};
</script>

<style>
</style>