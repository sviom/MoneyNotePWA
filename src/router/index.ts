import { createRouter, createWebHashHistory } from 'vue-router';

// 1. 경로에 사용할 컴포넌트를 정의.
// import를 사용해 파일을 가져올 수 있음.
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. 경로를 정의하고, 각 경로를 컴포넌트와 매핑.
// 중첩 경로에 대해서는 나중에 설명함.
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

// 3. `routes`를 옵션으로 전달해 라우터 인스턴스를 생성.
// 여기에 추가 옵션을 전달할 수 있지만, 지금은 간단하게 나타냄.
const router = createRouter({
    // 4. 사용할 히스토리 모드 정의. 여기서는 간단하게 해시 모드를 사용.
    history: createWebHashHistory(),
    routes, // `routes: routes`와 같음
});

export default router;
