var app = new Vue({
    el: '#app',
    data: {
        arr: [],
        status: 8,
        sleepDescription1: '',
        sleepDescription: '',
        sleep_data_list: [{
            startTime: '05:42',
            endTime: '14:25',
            total: 89,
            list: [{
                isSelected: false,
                length: 10,
                time: '05:42',
                type: 1
            },
                {
                    length: 8,
                    time: '05:52',
                    type: 3
                },
                {
                    length: 5,
                    time: '06:00',
                    type: 99
                },
                {
                    length: 11,
                    time: '06:10',
                    type: 1
                },
                {
                    length: 18,
                    time: '06:21',
                    type: 99
                },
                {
                    length: 9,
                    time: '13:39',
                    type: 1
                },
                {
                    length: 5,
                    time: '13:48',
                    type: 3
                },
                {
                    length: 14,
                    time: '13:53',
                    type: 0
                },
                {
                    length: 9,
                    time: '14:17',
                    type: 1
                }
            ]
        }, {
            startTime: '23:39',
            endTime: '06:20',
            total: 401,
            list: [{
                length: 15,
                time: '23:39',
                type: 1
            },
                {
                    length: 17,
                    time: '23:54',
                    type: 3
                },
                {
                    length: 42,
                    time: '00:11',
                    type: 4
                },
                {
                    length: 7,
                    time: '00:53',
                    type: 3
                },
                {
                    length: 20,
                    time: '01:00',
                    type: 1
                },
                {
                    length: 15,
                    time: '01:20',
                    type: 99
                },
                {
                    length: 11,
                    time: '01:35',
                    type: 99
                },
                {
                    length: 10,
                    time: '01:46',
                    type: 3
                },
                {
                    length: 12,
                    time: '01:57',
                    type: 3
                },
                {
                    length: 30,
                    time: '02:09',
                    type: 2
                },
                {
                    length: 6,
                    time: "02:39",
                    type: 3
                },
                {
                    length: 7,
                    time: "02:45",
                    type: 99
                },
                {
                    length: 22,
                    time: "02:52",
                    type: 3
                },
                {
                    length: 2,
                    time: "03:14",
                    type: 99
                },
                {
                    length: 23,
                    time: "03:16",
                    type: 99
                },
                {
                    length: 21,
                    time: "03:39",
                    type: 1
                },
                {
                    length: 14,
                    time: "04:00",
                    type: 3
                },
                {
                    length: 19,
                    time: "04:14",
                    type: 1
                },
                {
                    length: 39,
                    time: "04:33",
                    type: 3
                },
                {
                    length: 6,
                    time: "05:12",
                    type: 4
                },
                {
                    length: 19,
                    time: "05:18",
                    type: 2
                },
                {
                    length: 44,
                    time: "05:37",
                    type: 3
                }
            ]
        }],
        sleepOptions: {
            leaveBed: [
                {
                    "sleepStatus": "0||99",
                    "code": "A01",
                    "optionDesc": "我当时还躺在床上"
                },
                {
                    "sleepStatus": "0||99",
                    "code": "A02",
                    "optionDesc": "离床的时间不对，没有那么久"
                },
                {
                    "sleepStatus": "0||99",
                    "code": "A03",
                    "optionDesc": "离床的时间不对，没有那么短"
                }
            ],
            awake: [{
                "sleepStatus": "1",
                "code": "B01",
                "optionDesc": "我当时已经下床了"
            },
                {
                    "sleepStatus": "1",
                    "code": "B02",
                    "optionDesc": "我没有醒来，当时还是睡着的"
                },
                {
                    "sleepStatus": "1",
                    "code": "D01",
                    "optionDesc": "清醒时间不对，没有那么久"
                },
                {
                    "sleepStatus": "1",
                    "code": "D02",
                    "optionDesc": "清醒时间不对，没有那么短"
                }],
            sleep: [{
                "sleepStatus": "2",
                "code": "C01",
                "optionDesc": "我当时没有睡着，还醒着"
            },
                {
                    "sleepStatus": "3",
                    "code": "C02",
                    "optionDesc": "我根本不在床上"
                },
                {
                    "sleepStatus": "4",
                    "code": "C03",
                    "optionDesc": "整段睡眠（【睡眠起始时间】-【睡眠结束时间】）都是误报，我压根不在床上"
                }]
        }
    },
    methods: {
        handleClick(val1, val2, list) {
            list.map(item => {
                item.isSelected = false
            })
            val1.isSelected = true
            if (val1 && val2) {
                let time1 = val1.time.split(':')
                let time2 = val2.time.split(':')
                if (time2[0] < time1[0])
                    return this.sleepDescription = val1.time + ' ' + this.parseSleepTypeCH(val1.type)
                this.sleepDescription = val1.time + ' ' + this.parseSleepTypeCH(val1.type) + ((Number(time2[0]) - Number(time1[0])) * 60 + Number(time2[1]) - Number(time1[1])) + 'min'
                return
            }
            return this.sleepDescription = val1.time + '  ' + this.parseSleepTypeCH(val1.type) + (val1.length) + 'min'
        },
        handleClick1(val1, val2, list) {
            $('#list4')[0].style.display = 'flex';
            app.status = val1.type;
            if (app.status == 1) {
                app.arr = app.sleepOptions.awake;
            } else if (app.status == 0 || app.status == 99) {
                app.arr = app.sleepOptions.leaveBed;
            } else {
                app.arr = app.sleepOptions.sleep;
                if (val1 && val2) {
                    var optionDesc = "整段睡眠（【睡眠起始时间】-【睡眠结束时间】）都是误报，我压根不在床上";
                    var Time = optionDesc.replace('【睡眠起始时间】', val1.time).replace('【睡眠结束时间】', val2.time);
                    app.arr[2].optionDesc = Time;
                } else {
                    var optionDesc = "整段睡眠（【睡眠起始时间】-【睡眠结束时间】）都是误报，我压根不在床上";
                    var Time2 = app.sleep_data_list[1].endTime;
                    app.arr[2].optionDesc = optionDesc.replace('【睡眠起始时间】', val1.time).replace('【睡眠结束时间】', Time2);
                    console.log(app.arr[2].optionDesc);
                }
            }
            list.map(item => {
                item.isSelected = false
            })
            val1.isSelected = true
            if (val1 && val2) {
                let time1 = val1.time.split(':')
                let time2 = val2.time.split(':')
                if (time2[0] < time1[0])
                    return this.sleepDescription1 = val1.time + '开始持续' + val1.length + 'min的' + this.parseSleepTypeCH(val1.type) + '时段'
                this.sleepDescription1 = val1.time + '开始持续' + ((Number(time2[0]) - Number(time1[0])) * 60 + Number(time2[1]) - Number(time1[1])) + 'min的' + this.parseSleepTypeCH(val1.type) + '时段'
                return
            }
            return this.sleepDescription1 = val1.time + '开始持续' + val1.length + 'min的' + this.parseSleepTypeCH(val1.type) + '时段'
        },
        handleClick2() {
            $('#list1')[0].style.display = 'none';
            $('#list2')[0].style.display = 'flex';
            $('#list3')[0].style.visibility = 'visible';
            $('#list5')[0].style.display = 'block';
        },
        handleClick3(list, currentIndex) {
            for (var i = 0; i < list.length; i++) {
                $('input')[i].checked = false;
                console.log(i)
            }
            $('input')[currentIndex].checked = true;
            console.log(currentIndex);
        },
        handleClick5(list, currentIndex) {
            for (var i = 0; i < list.length; i++) {
                $('input')[i].checked = false;
                console.log(i)
            }
            console.log(currentIndex);
        },
        handleClick4() {
            $.ajax({
                type: 'POST',
                url: 'http://iottest.37smarthome.com/api/heartratesleepdetail/getSleepMapFeedback.app',
                data: {},
                success: function (res) {
                    console.log(res)
                }
            })
        },
        parseSleepPercent(val, total) {
            let str = (val / total * 100).toFixed(2)
            str += '%'
            return str
        },
        parseSleepType(val) {
            if (val.isSelected) {
                return 'click'
            }
            const types = {
                0: 'leave-bed',
                1: 'awake',
                2: 'eye-movement',
                3: 'light-sleep',
                4: 'deep-sleep',
                99: 'leave-bed'
            }
            return val.type > 4 ? 'leave-bed' : types[val.type]
        },
        parseSleepTypeCH(val) {
            const types = {
                0: '离床',
                1: '清醒',
                2: '快速眼动',
                3: '浅睡',
                4: '深睡',
                99: '离床'
            }
            return val.type > 4 ? '离床' : types[val]
        }
    }
})


