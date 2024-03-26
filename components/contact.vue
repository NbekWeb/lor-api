<template>
  <div class="relative w-full h-[300px] rounded-xl bg-blue px-16">
    <div class="flex items-center justify-between h-full">
      <p class="w-1/2 text-4xl text-white font-unbounded">
        Решите ваши проблемы вместе с нашими докторами
      </p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <div class="flex gap-6">
          <el-form-item label="Имя" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Номер" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="Проблема" prop="problem">
          <el-input v-model="ruleForm.problem"></el-input>
        </el-form-item>
        <div>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Отправить</el-button
          >
        </div>
      </el-form>
    </div>
    <div class="z-10">
      <img
        src="@/assets/img/heart1.png"
        alt="heart"
        class="w-[90px] h-auto absolute top-0 left-[20%]"
      />
      <img
        src="@/assets/img/heart2.png"
        alt="heart"
        class="w-[90px] h-auto absolute bottom-0 left-14"
      />
      <img
        src="@/assets/img/heart3.png"
        alt="heart"
        class="w-[90px] h-auto absolute bottom-0 right-[20%]"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        phone: "",
        problem: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Введите ваше имя",
            trigger: "blur",
          },
        ],
        problem: [
          {
            required: true,
            message: "Пожалуйста, опишите вашу проблему",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Введите свой номер телефона",
            trigger: "blur",
          },
          {
            validator: this.validatePhone,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("Form submitted successfully!");
        } else {
          console.log("Error submitting the form!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    validatePhone(rule, value, callback) {
      const regex = /^[0-9]+$/;

      if (!value || regex.test(value)) {
        if (value && value.length < 9) {
          callback(new Error("Пожалуйста, введите полный номер телефона"));
        } else {
          callback();
        }
      } else {
        callback(new Error("Пожалуйста, введите номер телефона правильно"));
      }
    },
  },
};
</script>
<style>
.el-form-item {
  display: flex !important;
  border-bottom: 1px solid #fff;
}
.el-form-item__label,
.el-form-item__label:before {
  color: #ebebeb !important;
  text-align: left !important;
  padding: 0 !important;
}
.el-form-item__label {
  width: auto !important;
}
.el-input__inner {
  background: inherit !important;
  border: none !important;
  padding: 0 !important;
  color: #fff !important;
}
.el-form-item__content {
  margin-left: 10px !important;
}
.el-button {
  margin-top: 20px;
  width: 100% !important;
  border: 1px solid #fff !important;
  background: #fff !important;
  color: #3c4bdc !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 21px !important;
  font-family: 'Unbounded';
}

.el-button:hover {
  background: inherit !important;
  color: #fff !important;
}
</style>
