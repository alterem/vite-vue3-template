import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'Nav',
    setup() {
        const router = useRouter();
        const reactiveData = reactive({
            navList: [
                {
                    name: 'Home',
                    isActive: false,
                    path: '/'
                },
                {
                    name: 'Vuex',
                    isActive: false,
                    path: '/vuex'
                },
                {
                    name: 'Axios',
                    isActive: false,
                    path: '/axios'
                },
                {
                    name: 'OneText',
                    isActive: false,
                    path: '/oneText'
                },
                {
                    name: 'Test',
                    isActive: false,
                    path: '/test'
                },
                {
                    name: 'Plotly',
                    isActive: false,
                    path: '/plotly'
                }
            ],
            navClick(e) {
                router.push(e.path);
            }
        });
        const changeNavActive = (currentPath) => {
            reactiveData.navList.forEach((v) => {
                const temp = v;
                temp.isActive = temp.path === currentPath;
                return temp;
            });
        };
        watch(() => router.currentRoute.value, (_n) => {
            changeNavActive(_n.path);
        });
        onMounted(() => {
            router.isReady().then(() => {
                changeNavActive(router.currentRoute.value.path);
            });
        });
        return {
            ...toRefs(reactiveData)
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({
    ...{ class: "nav relative w-full h-full box-border bg-white" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-list" },
});
for (const [nav, index] of __VLS_getVForSourceType((__VLS_ctx.navList))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.navClick(nav);
            } },
        ...{ class: "nav-item flex-center box-border w-full h-[60px] cursor-pointer" },
        ...{ class: ({ 'font-bold bg-[#f1f1f1]': nav.isActive }) },
        key: (index),
    });
    (nav.name);
}
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['box-border']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['box-border']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[60px]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#f1f1f1]']} */ ;
var __VLS_dollars;
let __VLS_self;
