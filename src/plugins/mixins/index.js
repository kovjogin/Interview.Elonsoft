/**
 * Здесь объявляем все глобальные миксины
 */
import Vue from 'vue';
import {AuthMixin} from '@/plugins/mixins/auth';

Vue.mixin(AuthMixin);