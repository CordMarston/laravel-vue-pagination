<template>
    <div class="flex">
    <span class="text-xs self-center text-slate-700">Showing {{ data.from }} to {{ data.to }} of {{ data.total }}</span>
    WTF
    </div>
</template>

<script>
import RenderlessPagination from './RenderlessPagination.vue';

export default {
    compatConfig: {
        MODE: 3
    },

    inheritAttrs: false,

    emits: ['pagination-change-page'],

    components: {
        RenderlessPagination
    },

    props: {
        data: {
            type: Object,
            default: () => {}
        },
        limit: {
            type: Number,
            default: 0
        },
        keepLength: {
            type: Boolean,
            default: false
        },
        itemClasses: {
            type: Array,
            default: () => [
                'bg-red-300',
                'text-gray-500',
                'border-gray-300',
                'hover:bg-gray-50',
            ],
        },
        activeClasses: {
            type: Array,
            default: () => [
                'bg-red-50',
                'border-red-500',
                'text-red-600',
            ],
        },
    },

    methods: {
        onPaginationChangePage(page) {
            this.$emit('pagination-change-page', page);
        }
    }
}
</script>
