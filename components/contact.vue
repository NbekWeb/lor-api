<template>
  <div
  id="contact"
    class="relative w-full h-[300px] rounded-xl bg-blue px-16 max-md:h-[450px] max-md:px-4 py-6"
  >
    <div
      class="flex flex-row items-center justify-between h-full max-md:flex-col max-md:items-center"
    >
      <p
        class="relative z-20 w-1/2 text-4xl text-white top-6 font-unbounded max-md:text-xl max-md:leading-6 max-md:w-full max-md:mb-8"
      >
        Решите ваши проблемы вместе с нашими докторами
      </p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100%"
        class="demo-ruleForm"
        id="contact"
      >
        <div class="flex flex-row gap-6 max-md:flex-col">
          <el-form-item prop="name" for="name">
            <el-input v-model="ruleForm.name" placeholder="Имя *"></el-input>
          </el-form-item>
          <el-form-item prop="phone" for="phone">
            <el-input v-model="ruleForm.phone" placeholder="Номер *"></el-input>
          </el-form-item>
        </div>
        <el-form-item prop="problem" for="problem">
          <el-input
            v-model="ruleForm.problem"
            placeholder="Проблема *"
          ></el-input>
        </el-form-item>
        <div>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="relative z-20 mt-5 rounded-xl"
            >Отправить</el-button
          >
        </div>
      </el-form>
    </div>
    <div class="z-10">
      <img
        src="@/assets/img/heart1.png"
        alt="heart"
        class="w-[90px] h-auto absolute top-0 left-[20%] max-md:left-[80%] max-md:w-16"
      />
      <img
        src="@/assets/img/heart2.png"
        alt="heart"
        class="w-[90px] h-auto absolute bottom-0 left-14 max-md:left-0 max-md:w-16"
      />
      <img
        src="@/assets/img/heart3.png"
        alt="heart"
        class="w-[90px] h-auto absolute bottom-0 right-[20%] max-md:hidden"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
          axios
            .post("https://lorapi.pythonanywhere.com/api/application/create", {
              name: this.ruleForm.name,
              number: this.ruleForm.phone,
              message: this.ruleForm.problem,
            })
            .then(() => {
              this.resetForm(formName);
            })
            .catch((error) => {
              console.error("Error submitting the form:", error);
            });
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

.el-form-item__label {
  width: auto !important;
}
.el-input__inner {
  background: inherit !important;
  border: none !important;
  padding: 0 !important;
  color: #ebebeb !important;
  font-family: Unbounded, sans-serif !important;
  font-size: 16px !important;
  line-height: 19px !important;
}
.el-form-item__content {
  margin-left: 10px !important;
}
.el-button--primary span {
  font-family: "Unbounded" !important;
}
.el-button {
  width: 100% !important;
  border: 1px solid #fff !important;
  background: #fff !important;
  color: #3c4bdc !important;
  font-weight: 500 !important;
  font-size: 18px !important;
  line-height: 21px !important;
}

.el-button:hover {
  background: inherit !important;
  color: #fff !important;
}

@media (max-width: 768px) {
  .el-button {
    font-size: 14px !important;
  }
}
</style>
