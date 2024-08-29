<template>
    <div class="flex text-xs flex-col md:flex-row gap-2">
        <span class="text-xs self-center text-slate-700 text-nowrap" v-if="data.from && data.to && data.total">Showing {{ data.from }} to {{ data.to }} of {{ data.total }}</span>
        <span class="text-xs self-center text-slate-700" v-else>No results found</span>
        <div class="flex place-items-center content-center flex-wrap justify-center">
            <RenderlessPagination
                :data="data"
                :limit="limit"
                :keep-length="keepLength"
                @pagination-change-page="onPaginationChangePage"
                v-slot="slotProps"
            >
                <nav
                    v-bind="$attrs"
                    class="ml-0 md:ml-2 inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse"
                    aria-label="Pagination"
                    v-if="slotProps.computed.total > slotProps.computed.perPage"
                >
                    <button
                        class="relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50"
                        :class="itemClasses"
                        :disabled="!slotProps.computed.prevPageUrl"
                        v-on="slotProps.prevButtonEvents"
                    >
                        <slot name="prev-nav">
                            <span class="sr-only">Previous</span>
                            <svg
                                class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                            </svg>
                        </slot>
                    </button>

                    <button
                        class="relative inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20"
                        :class="[
                            page == slotProps.computed.currentPage ? activeClasses : itemClasses,
                            page == slotProps.computed.currentPage ? 'z-30' : '',
                        ]"
                        :aria-current="slotProps.computed.currentPage ? 'page' : null"
                        v-for="(page, key) in slotProps.computed.pageRange"
                        :key="key"
                        v-on="slotProps.pageButtonEvents(page)"
                        :disabled="page === slotProps.computed.currentPage"
                    >
                        {{ page }}
                    </button>

                    <button
                        class="relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50"
                        :class="itemClasses"
                        :disabled="!slotProps.computed.nextPageUrl"
                        v-on="slotProps.nextButtonEvents"
                    >
                        <slot name="next-nav">
                            <span class="sr-only">Next</span>
                            <svg
                                class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                            </svg>
                        </slot>
                    </button>
                </nav>
            </RenderlessPagination>
            <v-select class="small" :options="sizeOptions" @option:selected="sizeChanged" v-model="pageS" append-to-body :calculate-position="withPopper" :clearable="false" :selectOnTab="true">
                <template #option="option">
                    <span class="text-xs">{{ option.label }}</span>
                </template>
            </v-select>
        </div>
    </div>
</template>
<style>
.vs__dropdown-menu {
    min-width: 100px!important;
}
</style>
<script>
import RenderlessPagination from './RenderlessPagination.vue';
import vSelect from 'vue-select'
import { createPopper } from '@popperjs/core'
import { nextTick } from 'vue';
export default {
    compatConfig: {
        MODE: 3
    },

    inheritAttrs: false,

    emits: ['pagination-change-page', 'size-change'],

    components: {
        RenderlessPagination,
        vSelect
    },
    data() {
        return {
            pageS: 20,
            currentPage: 1
        }
    },
    props: {
        sizeOptions: {
            type: Array,
            default: [5, 10, 20, 30, 40, 50]
        },
        pageSize: {
            type: Number,
            default: 20
        },
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
                'bg-white',
                'text-gray-500',
                'border-gray-300',
                'hover:bg-gray-50',
            ],
        },
        activeClasses: {
            type: Array,
            default: () => [
                'bg-blue-50',
                'border-blue-500',
                'text-blue-600',
            ],
        },
    },

    methods: {
        sizeChanged(e) {
            this.$emit('size-change', e);
            this.$emit('pagination-change-page', this.currentPage, this.pageS);
        },
        onPaginationChangePage(page) {
            this.currentPage = page;
            this.$emit('pagination-change-page', this.currentPage, this.pageS);
        },
        async withPopper(dropdownList, component, { width }) {
            nextTick(() => {
            dropdownList.style.width = width;
            component.$refs.toggle.width = width;
            component.$refs.parent_holder.width = width;
            const popper = createPopper(component.$refs.toggle, dropdownList, {
            placement: 'top',
                modifiers: [
                {
                    name: 'offset',
                    options: {
                    offset: [0, -5],
                    },
                },
                {
                    name: 'toggleClass',
                    enabled: true,
                    phase: 'write',
                    fn({ state }) {
                    component.$el.classList.toggle(
                        'drop-up',
                        state.placement === 'top'
                    )
                    },
                },
                ],
            })
            return () => popper.destroy()
            })
        }
    },
    mounted() {
        this.pageS = this.pageSize;
    }
}
</script>
