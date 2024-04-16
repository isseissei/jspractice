import { AlarmClockTest, AlarmClock } from "./index.js";


const alarmClockTest = new AlarmClockTest();
test("テストクラスのインスタンスが元クラスをちゃんと継承してるか確認", () => {
    expect(alarmClockTest instanceof AlarmClock).toBeTruthy();
});

test("通常 -> アラームセット中: アラーム設定", () => {
    alarmClockTest.setStateNormal();
    alarmClockTest.setAlarm();
    expect(alarmClockTest.state).toBe("alarmSet");
});

test("アラームセット中 -> 通常: アラーム解除", () => {
    alarmClockTest.setStateAlarmSet();
    alarmClockTest.cancelAlarm();
    expect(alarmClockTest.state).toBe("normal");
});

test("アラームセット中 --> アラーム鳴動中: アラーム設定時刻到達", () => {
    alarmClockTest.setAlarm();
    expect(alarmClockTest.reachedToAlarmTime()).toBe("soundAlarm");
});

test("アラーム鳴動中 --> 通常: アラーム解除", () => {
    alarmClockTest.setStateAlarmSounding();
    alarmClockTest.cancelAlarm();
    expect(alarmClockTest.state).toBe("normal");
});

test("アラーム鳴動中 --> スヌーズ中: スヌーズ", () => {
    alarmClockTest.setStateAlarmSounding();
    alarmClockTest.snooze();
    expect(alarmClockTest.state).toBe("snoozing");
});

test("スヌーズ中 --> アラーム鳴動中: スヌーズ設定時間経過", () => {
    alarmClockTest.setStateSnoozing();
    alarmClockTest.elapseSnoozeTime();
    expect(alarmClockTest.state).toBe("alarmSounding");
});

test("スヌーズ中 --> 通常: アラーム解除", () => {
    alarmClockTest.setStateSnoozing();
    alarmClockTest.cancelAlarm();
    expect(alarmClockTest.state).toBe("normal");
});