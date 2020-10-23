
    columns = [];
    ms = '86400000';
    var f;

    function max() {
        var deadlineTime = new Date('2019-12-28 01:10:00').getTime();
        var FirstSundayTime = new Date().getTime() - (new Date().getDay() + 7) * ms;
        f = (FirstSundayTime - deadlineTime) / (7 * ms);
    }

    function timeString(n) {
        var currentTime = new Date();
        var day = currentTime.getDay();
        var time1 = currentTime.getTime();
        var lastSaturdayTime = time1 - (day + 1 + n * 7) * ms;
        var ls = new Date(lastSaturdayTime);
        var lastMonth = ls.getMonth() + 1;
        var lastSaturdayDay = ls.getDate();
        var FirstSundayTime = time1 - (day + 7 + n * 7) * ms;
        var Fs = new Date(FirstSundayTime);
        var firstMonth = Fs.getMonth() + 1;
        var firstSundayDay = Fs.getDate();
        var val = firstMonth + '.' + firstSundayDay + '-' + lastMonth + '.' + lastSaturdayDay;
        columns.unshift(val);
        max();
    }

    timeString(0);

    function handle() {
        for (var m = 1; m < f; m++) {
            timeString(m);
        }
    }

    handle();
