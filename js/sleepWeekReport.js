var app = new Vue({
    el: '#app',
    template: '#template',
    data: {
        selectedDevice: null,
        selectedTime: null,
        device_list: ['老爸', '我', '老妈'],
        time_list: columns,
        isDevicePickerVisible: false, // 选择设备的底部弹窗是否显示
        isTimePickerVisible: false, // 选择时间的底部弹窗是否显示
    },
    methods: {
        // 选完设备后点击右上角的确定就会触发这函数
        onDeviceConfirm(value) {
            this.selectedDevice= value;
            this.isDevicePickerVisible = false

        },
        // 选完时间后点击右上角的确定就会触发这函数
        onDateConfirm(value) {
            this.selectedTime= value;
            this.isTimePickerVisible = false
        },
        // 点击选择设备/选择时间的底部弹窗左上角的取消按钮就会触发这函数
        onCancel() {
            this.isDevicePickerVisible = false
            this.isTimePickerVisible = false
        },
        onChange() {
        }
    }
})

