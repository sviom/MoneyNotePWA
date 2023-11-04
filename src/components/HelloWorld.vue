<template>
    이름
    <input type="text" v-model="user.name" />
    이메일
    <input type="email" v-model="user.email" />
    비밀번호
    <input type="password" v-model="user.password" />
    비밀번호 확인
    <input type="password" v-model="user.passwordConfirm" />
    <button @click="signUp">로그인</button>
    <br />

    받은인증번호입력
    <input type="text" v-model="authcode" />
    <button @click="confirmAuthCode">인증확인</button>

    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HttpClient from '../utils/http';
import { UserModel } from '../models/User';

defineProps<{ msg: string }>();

const count = ref(0);
const user = ref(new UserModel());
const authcode = ref('');

const signUp = async () => {
    if (user.value.password !== user.value.passwordConfirm) {
        alert('test');
        return;
    }

    const result = await HttpClient.post<UserModel, boolean>('/auth/auth', user.value);
    console.log('result : ', result);
    console.log('result : ', user.value);
};

const confirmAuthCode = async () => {
    if (user.value.password !== user.value.passwordConfirm) {
        alert('test');
        return;
    }
    if (!authcode.value) {
        alert('test2');
        return;
    }

    user.value.authCode = authcode.value;

    const result = await HttpClient.post<UserModel, boolean>('/auth/user', user.value);
    if (result) {
        alert('가입성공');
    }
};
</script>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
