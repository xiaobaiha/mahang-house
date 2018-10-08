//index.js
//获取应用实例
const app = getApp()
//test
var animation = wx.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})
// var r=0;
var toggleTrueFalse = true;
var date = new Date();
var helloData = {
  name: 'WeChat'
}
let Monday = {
  inClass: false,
  classNo: 0,
  class1: {
    sectionNo: 3,
    name: "港口管理",
    place: "四海楼505（多媒体）",
    teacher: "刘翠莲",
    weekslot: "10-18"
  },
  class2: {
    sectionNo: 5,
    name: "运输代理业务",
    place: "百川楼103（多媒体）",
    teacher: "闵德权",
    weekslot: "01-04 06-15"
  },
  class3: {
    sectionNo: 7,
    name: "港口装卸工艺",
    place: "励志楼202（多媒体）",
    teacher: "刘翠莲",
    weekslot: "01-04 06-10"
  },
  getContentNext(weekSlotNum, date) {
    this.inClass = false;
    this.classNo = 0;
    let classArrTemp = [this.class1, this.class2, this.class3];
    for (let i = 0; i < 3; i++) {
      if (this.classNo != 0) {
        break;
      }
      let arrTemp = classArrTemp[i].weekslot.split(' ');
      // console.log("arrtemp", arrTemp);
      for (let entryItem of arrTemp) {
        let [varFirst, varLast] = entryItem.split('-');
        // console.log("first", varFirst<=weekSlotNum, "last", varLast>=weekSlotNum);
        if ((varFirst <= weekSlotNum && (varLast >= weekSlotNum)) || (varFirst == weekSlotNum && varLast == 0)) {
          let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
          let nearClass = 0;
          let nodeSecond;
          console.log("section no", classArrTemp[i].sectionNo);
          switch (classArrTemp[i].sectionNo) {
            case 1:
              nodeSecond = 8 * 3600;
              nearClass = 1;
              break;
            case 3:
              nodeSecond = 10 * 3600;
              nearClass = 3;
              break;
            case 5:
              nodeSecond = 13 * 3600 + 30 * 60;
              nearClass = 5;
              break;
            case 7:
              nodeSecond = 15 * 3600 + 30 * 60;
              nearClass = 7;
              break;
            default:
              break;
          }
          if (nodeSecond <= secondDistance && (nodeSecond + 95 * 60) > secondDistance) {
            this.inClass = true;
            this.classNo = (i + 1);
            break;
          }
          else if (nodeSecond > secondDistance) {
            this.classNo = (i + 1);
            this.inClass = false;
            break;
          }
          else {
            this.inClass = false;
            this.classNo = 0;
          }
        }
      }
    }
    if (this.inClass == true) {
      return "距离下课还有"
    }
    else {
      if (this.classNo == 0) {
        return "今日已无其他课程"
      }
      else {
        return "距离下一节课还有"
      }
    }
  },
  getTimeLeft(date) {
    let classArrTemp = [this.class1, this.class2, this.class3];
    let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    // console.log(secondDistance)
    // console.log(this.classNo)
    let nodeSecond;
    switch (classArrTemp[this.classNo - 1].sectionNo) {
      case 1:
        nodeSecond = 8 * 3600;
        break;
      case 3:
        nodeSecond = 10 * 3600;
        break;
      case 5:
        nodeSecond = 13 * 3600 + 30 * 60;
        break;
      case 7:
        nodeSecond = 15 * 3600 + 30 * 60;
        break;
      default:
        break;
    }
    // console.log(nodeSecond)
    if (this.inClass == true) {
      let secondLeft = nodeSecond + (95 * 60) - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
    else {
      let secondLeft = nodeSecond - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
  },
  getPlace() {
    let classArrTemp = [this.class1, this.class2, this.class3];
    return classArrTemp[this.classNo - 1].place
  },
  getClassName() {
    let classArrTemp = [this.class1, this.class2, this.class3];
    return classArrTemp[this.classNo - 1].name
  }
};

let Tuesday = {
  inClass: false,
  classNo: 0,
  class1: {
    sectionNo: 1,
    name: "应急物流与逆向物流（双语）",
    place: "尚德211（多媒体）",
    teacher: "常征",
    weekslot: "12-16"
  },
  class2: {
    sectionNo: 1,
    name: "管理信息系统",
    place: "励志楼201（多媒体）",
    teacher: "张琳",
    weekslot: "01-04 06-10"
  },
  class3: {
    sectionNo: 5,
    name: "航运管理（双语）",
    place: "德济楼101（多媒体）",
    teacher: "赵志葳",
    weekslot: "04-00 06-18"
  },
  getContentNext(weekSlotNum, date) {
    this.inClass = false;
    this.classNo = 0;
    let classArrTemp = [this.class1, this.class2, this.class3];
    for (let i = 0; i < 3; i++) {
      if (this.classNo != 0) {
        break;
      }
      let arrTemp = classArrTemp[i].weekslot.split(' ');
      for (let entryItem of arrTemp) {
        let [varFirst, varLast] = entryItem.split('-');
        if ((varFirst <= weekSlotNum && (varLast >= weekSlotNum)) || (varFirst == weekSlotNum && varLast == 0)) {
          let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
          let nearClass = 0;
          let nodeSecond;
          switch (classArrTemp[i].sectionNo) {
            case 1:
              nodeSecond = 8 * 3600;
              nearClass = 1;
              break;
            case 3:
              nodeSecond = 10 * 3600;
              nearClass = 3;
              break;
            case 5:
              nodeSecond = 13 * 3600 + 30 * 60;
              nearClass = 5;
              break;
            case 7:
              nodeSecond = 15 * 3600 + 30 * 60;
              nearClass = 7;
              break;
            default:
              break;
          }
          if (nodeSecond <= secondDistance && (nodeSecond + 95 * 60) > secondDistance) {
            this.inClass = true;
            this.classNo = (i + 1);
            break;
          }
          else if (nodeSecond > secondDistance) {
            this.classNo = (i + 1);
            this.inClass = false;
            break;
          }
          else {
            this.inClass = false;
            this.classNo = 0;
          }
        }
      }
    }
    if (this.inClass == true) {
      return "距离下课还有"
    }
    else {
      if (this.classNo == 0) {
        return "今日已无其他课程"
      }
      else {
        return "距离下一节课还有"
      }
    }
  },
  getTimeLeft(date) {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4];
    let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    // console.log(secondDistance)
    // console.log(this.classNo)
    let nodeSecond;
    switch (classArrTemp[this.classNo - 1].sectionNo) {
      case 1:
        nodeSecond = 8 * 3600;
        break;
      case 3:
        nodeSecond = 10 * 3600;
        break;
      case 5:
        nodeSecond = 13 * 3600 + 30 * 60;
        break;
      case 7:
        nodeSecond = 15 * 3600 + 30 * 60;
        break;
      default:
        break;
    }
    // console.log(nodeSecond)
    if (this.inClass == true) {
      let secondLeft = nodeSecond + (95 * 60) - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
    else {
      let secondLeft = nodeSecond - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
  },
  getPlace() {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4];
    return classArrTemp[this.classNo - 1].place
  },
  getClassName() {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4];
    return classArrTemp[this.classNo - 1].name
  }
};
let Wednesday = {
  inClass: false,
  classNo: 0,
  class1: {
    sectionNo: 1,
    name: "租船运输业务（双语）",
    place: "百川楼402（多媒体）",
    teacher: "于诗卉",
    weekslot: "01-04 06-18"
  },
  class2: {
    sectionNo: 3,
    name: "运输代理业务",
    place: "百川楼101（多媒体）",
    teacher: "闵德权",
    weekslot: "01-04 06-14"
  },
  class3: {
    sectionNo: 9,
    name: "商务英语写作",
    place: "尚德楼210（多媒体）",
    teacher: "刘业平",
    weekslot: "01-16 18-19"
  },
  getContentNext(weekSlotNum, date) {
    this.inClass = false;
    this.classNo = 0;
    let classArrTemp = [this.class1, this.class2, this.class3];
    for (let i = 0; i < 3; i++) {
      if (this.classNo != 0) {
        break;
      }
      let arrTemp = classArrTemp[i].weekslot.split(' ');
      for (let entryItem of arrTemp) {
        let [varFirst, varLast] = entryItem.split('-');
        if ((varFirst <= weekSlotNum && (varLast >= weekSlotNum)) || (varFirst == weekSlotNum && varLast == 0)) {
          let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
          let nearClass = 0;
          let nodeSecond;
          switch (classArrTemp[i].sectionNo) {
            case 1:
              nodeSecond = 8 * 3600;
              nearClass = 1;
              break;
            case 3:
              nodeSecond = 10 * 3600;
              nearClass = 3;
              break;
            case 5:
              nodeSecond = 13 * 3600 + 30 * 60;
              nearClass = 5;
              break;
            case 7:
              nodeSecond = 15 * 3600 + 30 * 60;
              nearClass = 7;
              break;
            case 9:
              nodeSecond = 18 * 3600;
              nearClass = 9;
              break;
            default:
              break;
          }
          if (nodeSecond <= secondDistance && (nodeSecond + 95 * 60) > secondDistance) {
            this.inClass = true;
            this.classNo = (i + 1);
            break;
          }
          else if (nodeSecond > secondDistance) {
            this.classNo = (i + 1);
            this.inClass = false;
            break;
          }
          else {
            this.inClass = false;
            this.classNo = 0;
          }
        }
      }
    }
    if (this.inClass == true) {
      return "距离下课还有"
    }
    else {
      if (this.classNo == 0) {
        return "今日已无其他课程"
      }
      else {
        return "距离下一节课还有"
      }
    }
  },
  getTimeLeft(date) {
    let classArrTemp = [this.class1, this.class2, this.class3];
    let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    // console.log(secondDistance)
    // console.log(this.classNo)
    let nodeSecond;
    switch (classArrTemp[this.classNo - 1].sectionNo) {
      case 1:
        nodeSecond = 8 * 3600;
        break;
      case 3:
        nodeSecond = 10 * 3600;
        break;
      case 5:
        nodeSecond = 13 * 3600 + 30 * 60;
        break;
      case 7:
        nodeSecond = 15 * 3600 + 30 * 60;
        break;
      case 9:
        nodeSecond = 18 * 3600;
        // nearClass = 9;
        break;
      default:
        break;
    }
    // console.log(nodeSecond)
    if (this.inClass == true) {
      let secondLeft = nodeSecond + (95 * 60) - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
    else {
      let secondLeft = nodeSecond - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
  },
  getPlace() {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4];
    return classArrTemp[this.classNo - 1].place
  },
  getClassName() {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4];
    return classArrTemp[this.classNo - 1].name
  }
};
let Thursday = {
  inClass: false,
  classNo: 0,
  class1: {
    sectionNo: 1,
    name: "租船运输业务（双语）",
    place: "百川楼402（多媒体）",
    teacher: "于诗卉",
    weekslot: "17-00"
  },
  class2: {
    sectionNo: 3,
    name: "港口管理",
    place: "四海楼505（多媒体）",
    teacher: "刘翠莲",
    weekslot: "10-18"
  },
  class3: {
    sectionNo: 5,
    name: "港口装卸工艺",
    place: "励志楼202",
    teacher: "刘翠莲",
    weekslot: "01-04 06-10"
  },
  class4: {
    sectionNo: 7,
    name: "应急物流与逆向物流（双语）",
    place: "尚德楼211",
    teacher: "常征",
    weekslot: "12-15"
  },
  class5: {
    sectionNo: 7,
    name: "管理信息系统",
    place: "励志楼201",
    teacher: "张琳",
    weekslot: "01-04 06-10"
  },
  getContentNext(weekSlotNum, date) {
    this.inClass = false;
    this.classNo = 0;
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4, this.class5];
    for (let i = 0; i < 5; i++) {
      if (this.classNo != 0) {
        break;
      }
      let arrTemp = classArrTemp[i].weekslot.split(' ');
      for (let entryItem of arrTemp) {
        let [varFirst, varLast] = entryItem.split('-');
        if ((varFirst <= weekSlotNum && (varLast >= weekSlotNum)) || (varFirst == weekSlotNum && varLast == 0)) {
          let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
          let nearClass = 0;
          let nodeSecond;
          switch (classArrTemp[i].sectionNo) {
            case 1:
              nodeSecond = 8 * 3600;
              nearClass = 1;
              break;
            case 3:
              nodeSecond = 10 * 3600;
              nearClass = 3;
              break;
            case 5:
              nodeSecond = 13 * 3600 + 30 * 60;
              nearClass = 5;
              break;
            case 7:
              nodeSecond = 15 * 3600 + 30 * 60;
              nearClass = 7;
              break;
            default:
              break;
          }
          if (nodeSecond <= secondDistance && (nodeSecond + 95 * 60) > secondDistance) {
            this.inClass = true;
            this.classNo = (i + 1);
            break;
          }
          else if (nodeSecond > secondDistance) {
            this.classNo = (i + 1);
            this.inClass = false;
            break;
          }
          else {
            this.inClass = false;
            this.classNo = 0;
          }
        }
      }
    }
    if (this.inClass == true) {
      return "距离下课还有"
    }
    else {
      if (this.classNo == 0) {
        return "今日已无其他课程"
      }
      else {
        return "距离下一节课还有"
      }
    }
  },
  getTimeLeft(date) {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4, this.class5];
    let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    // console.log(secondDistance)
    // console.log(this.classNo)
    let nodeSecond;
    switch (classArrTemp[this.classNo - 1].sectionNo) {
      case 1:
        nodeSecond = 8 * 3600;
        break;
      case 3:
        nodeSecond = 10 * 3600;
        break;
      case 5:
        nodeSecond = 13 * 3600 + 30 * 60;
        break;
      case 7:
        nodeSecond = 15 * 3600 + 30 * 60;
        break;
      default:
        break;
    }
    // console.log(nodeSecond)
    if (this.inClass == true) {
      let secondLeft = nodeSecond + (95 * 60) - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
    else {
      let secondLeft = nodeSecond - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
  },
  getPlace() {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4, this.class5];
    return classArrTemp[this.classNo - 1].place
  },
  getClassName() {
    let classArrTemp = [this.class1, this.class2, this.class3, this.class4, this.class5];
    return classArrTemp[this.classNo - 1].name
  }
};
let Friday = {
  inClass: false,
  classNo: 0,
  class1: {
    sectionNo: 3,
    name: "航运管理（双语）",
    place: "德济楼101（多媒体）",
    teacher: "赵志葳",
    weekslot: "04-00 06-17"
  },
  getContentNext(weekSlotNum, date) {
    this.inClass = false;
    this.classNo = 0;
    let classArrTemp = [this.class1];
    for (let i = 0; i < 1; i++) {
      if (this.classNo != 0) {
        break;
      }
      let arrTemp = classArrTemp[i].weekslot.split(' ');
      
      for (let entryItem of arrTemp) {
        let [varFirst, varLast] = entryItem.split('-');
        // console.log(varFirst == weekSlotNum && varLast == 0);
        if ((varFirst <= weekSlotNum && (varLast >= weekSlotNum)) || (varFirst == weekSlotNum && varLast == 0)) {
          let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
          let nearClass = 0;
          let nodeSecond;
          // console.log(classArrTemp[i].sectionNo);
          switch (classArrTemp[i].sectionNo) {
            case 1:
              nodeSecond = 8 * 3600;
              nearClass = 1;
              break;
            case 3:
              nodeSecond = 10 * 3600;
              nearClass = 3;
              break;
            case 5:
              nodeSecond = 13 * 3600 + 30 * 60;
              nearClass = 5;
              break;
            case 7:
              nodeSecond = 15 * 3600 + 30 * 60;
              nearClass = 7;
              break;
            default:
              break;
          }
          if (nodeSecond <= secondDistance && (nodeSecond + 95 * 60) > secondDistance) {
            this.inClass = true;
            this.classNo = (i + 1);
            break;
          }
          else if (nodeSecond > secondDistance) {
            this.classNo = (i + 1);
            this.inClass = false;
            break;
          }
          else {
            this.inClass = false;
            this.classNo = 0;
          }
        }
      }
    }
    if (this.inClass == true) {
      return "距离下课还有"
    }
    else {
      if (this.classNo == 0) {
        return "今日已无其他课程"
      }
      else {
        return "距离下一节课还有"
      }
    }
  },
  getTimeLeft(date) {
    let classArrTemp = [this.class1];
    let secondDistance = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    // console.log(secondDistance)
    // console.log(this.classNo)
    let nodeSecond;
    switch (classArrTemp[this.classNo - 1].sectionNo) {
      case 1:
        nodeSecond = 8 * 3600;
        break;
      case 3:
        nodeSecond = 10 * 3600;
        break;
      case 5:
        nodeSecond = 13 * 3600 + 30 * 60;
        break;
      case 7:
        nodeSecond = 15 * 3600 + 30 * 60;
        break;
      default:
        break;
    }
    // console.log(nodeSecond)
    if (this.inClass == true) {
      let secondLeft = nodeSecond + (95 * 60) - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
    else {
      let secondLeft = nodeSecond - secondDistance;
      let hourTemp = Math.floor(secondLeft / 3600);
      let minuteTemp = Math.floor((secondLeft - hourTemp * 3600) / 60);
      let secondTemp = Math.floor(secondLeft - hourTemp * 3600 - minuteTemp * 60);
      let timeString = '';
      let strTemp = (hourTemp > 9) ? hourTemp : ('0' + hourTemp);
      timeString += strTemp;
      strTemp = (minuteTemp > 9) ? minuteTemp : ('0' + minuteTemp);
      timeString = timeString + ':' + strTemp;
      strTemp = (secondTemp > 9) ? secondTemp : ('0' + secondTemp);
      timeString = timeString + ':' + strTemp;
      return timeString;
    }
  },
  getPlace() {
    let classArrTemp = [this.class1];
    return classArrTemp[this.classNo - 1].place
  },
  getClassName() {
    let classArrTemp = [this.class1];
    return classArrTemp[this.classNo - 1].name
  }
}
Page({
  data: {
    // swiperBgcolor,
    helloData,
    rotateAngle: 0,
    classNumToday: 4,
    firstClassTitle: '',
    firstClassName: '',
    firstClassTime: '',
    firstClassClassRoom: '',
    firstClassWeekStr: '',
    secondClassName: '',
    secondClassTime: '',
    secondClassClassRoom: '',
    secondClassWeekStr: '',
    thirdClassName: '',
    thirdClassTime: '',
    thirdClassClassRoom: '',
    thirdClassWeekStr: '',
    fourthClassName: '',
    fourthClassTime: '',
    fourthClassClassRoom: '',
    fourthClassWeekStr: '',
    fifthClassName: '',
    fifthClassTime: '',
    fifthClassClassRoom: '',
    fifthClassWeekStr: '',

    animationData: {},
    // count:1,
    motto: 'Hello World',
    currentTime: 'hello\n',
    frontText: '',
    timeLeft: '',
    nextClass: 'hello\n',
    classRoom: 'hello\n',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //test
  changeName: function (e) {
    // sent data change to view.
    this.setData({
      name: 'MINA'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    // alert(data-text)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    // var r;
    this.changeClasses();
    setInterval(this.changeClasses, 1000);
    setInterval(this.toggleText, 1000);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
    })

    this.animation = animation
    // animation.step()

    // animation.scale(2, 2).rotate(45).step();

    this.setData({
      animationData: animation.export()
    })

    setInterval(function () {
      // animation.opacity(0.5).step();
      // animation.translate(30).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: animation.export()
    })
  },
  toggleText() {
    if (toggleTrueFalse) {
      toggleTrueFalse = false;
      this.animation.scale(1.2, 1.2).step();
    }
    else {
      toggleTrueFalse = true;
      this.animation.scale(1, 1).step();
    }
  },
  rotateThenScale: function () {
    // 先旋转后放大
    // this.rotateAngle += 45;
    r += 45;
    this.animation.rotate(r).step()
    // this.animation.rotate(90).step()
    // this.animation.rotate(135).step()
    // this.animation.scale(0.5, 2).rotate(45).step();
    // this.animation.scale(0.5, 2).rotate(90).step();
    this.setData({
      animationData: animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: animation.export()
    })
  },
  //end animation

  changeClasses() {
    date = new Date();
    // date += 3600;
    let month = date.getMonth();
    let day = date.getDate();
    let weekNo = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let weekSlotVar
    let temp = new Date("Mon Feb 26 00:00:00 UTC+0800 2018");
    temp = Math.ceil(((date - temp) / (3600 * 1000 * 24 * 7)));
    weekSlotVar = temp;
    // console.log(weekSlotVar);
    let frontTextTemp = '', timeLeftTemp = '', nextClassTemp = '', classRoomTemp = '', firstclasstitle = '第一节课';
    let name1, name2, name3, name4,name5;
    let room1, room2, room3, room4,room5;
    let week1, week2, week3, week4,week5;
    let time1, time2, time3, time4,time5;
    let classnumtoday;
    // console.log("week no", weekNo);
    // weekNo += 3;
    // weekSlotVar += 2;
    console.log(weekSlotVar);
    switch (weekNo) {
      case 1:
        frontTextTemp = Monday.getContentNext(weekSlotVar, date);
        // console.log("front text", frontTextTemp);
        if (Monday.classNo != 0) {
          timeLeftTemp = Monday.getTimeLeft(date);
          console.log("time left", timeLeftTemp);
          nextClassTemp = Monday.getClassName();
          classRoomTemp = Monday.getPlace();
        }
        name1 = Monday.class1.name;
        room1 = Monday.class1.place;
        time1 = '10:00-11:35';
        week1 = '10-18周';
        name2 = Monday.class2.name;
        room2 = Monday.class2.place;
        time2 = '13:30-15:05';
        week2 = '1-4周 6-15周';
        name3 = Monday.class3.name;
        room3 = Monday.class3.place;
        time3 = '15:30-17:05';
        week3 = '1-4周 6-10周';
        classnumtoday = 3;
        break;
      case 2:
        frontTextTemp = Tuesday.getContentNext(weekSlotVar, date);
        if (Tuesday.classNo != 0) {
          timeLeftTemp = Tuesday.getTimeLeft(date);
          nextClassTemp = Tuesday.getClassName();
          classRoomTemp = Tuesday.getPlace();
        }
        name1 = Tuesday.class1.name;
        room1 = Tuesday.class1.place;
        time1 = '08:00-09:35';
        week1 = '12-16周';
        name2 = Tuesday.class2.name;
        room2 = Tuesday.class2.place;
        time2 = '08:00-09:35';
        week2 = '1-4周 6-10周';
        name3 = Tuesday.class3.name;
        room3 = Tuesday.class3.place;
        time3 = '13:30-15:05';
        week3 = '4周 6-18周';
        classnumtoday = 3;
        break;
      case 3:
        frontTextTemp = Wednesday.getContentNext(weekSlotVar, date);
        if (Wednesday.classNo != 0) {
          timeLeftTemp = Wednesday.getTimeLeft(date);
          nextClassTemp = Wednesday.getClassName();
          classRoomTemp = Wednesday.getPlace();
        }
        name1 = Wednesday.class1.name;
        room1 = Wednesday.class1.place;
        time1 = '08:00-09:35';
        week1 = '1-4周 6-18周';
        name2 = Wednesday.class2.name;
        room2 = Wednesday.class2.place;
        time2 = '10:00-11:35';
        week2 = '1-4周 6-14周';
        name3 = Wednesday.class3.name;
        room3 = Wednesday.class3.place;
        time3 = '18:00-19:35';
        week3 = '1-16周 18-19周';
        classnumtoday = 3;
        break;
      case 4:
        frontTextTemp = Thursday.getContentNext(weekSlotVar, date);
        if (Thursday.classNo != 0) {
          timeLeftTemp = Thursday.getTimeLeft(date);
          nextClassTemp = Thursday.getClassName();
          classRoomTemp = Thursday.getPlace();
        }
        name1 = Thursday.class1.name;
        room1 = Thursday.class1.place;
        time1 = '08:00-09:35';
        week1 = '17周';
        name2 = Thursday.class2.name;
        room2 = Thursday.class2.place;
        time2 = '10:00-11:35';
        week2 = '10-18周';
        name3 = Thursday.class3.name;
        room3 = Thursday.class3.place;
        time3 = '13:30-15:05';
        week3 = '1-4周 6-10周';
        name4 = Thursday.class4.name;
        room4 = Thursday.class4.place;
        time4 = '15:30-17:05';
        week4 = '12-15周';
        name5 = Thursday.class5.name;
        room5 = Thursday.class5.place;
        time5 = '15:30-17:05';
        week5 = '1-4周 6-10周';
        classnumtoday = 5;
        break;
      case 5:
        frontTextTemp = Friday.getContentNext(weekSlotVar, date);
        if (Friday.classNo != 0) {
          timeLeftTemp = Friday.getTimeLeft(date);
          nextClassTemp = Friday.getClassName();
          classRoomTemp = Friday.getPlace();
        }
        name1 = Friday.class1.name;
        room1 = Friday.class1.place;
        time1 = '10:00-11:35';
        week1 = '4周 6-17周';
        classnumtoday = 1;
        break;
      case 6:
        frontTextTemp = '今日已无课程';
        timeLeftTemp = '';
        nextClassTemp = '';
        classRoomTemp = '';
        classnumtoday = 1;
        name1 = '好好放松一下吧';
        room1 = '或者给我打电话！';
        time1 = '爱你哦';
        week1 = '';
        firstclasstitle = '今天没有课哦';
        break;
      case 0:
        frontTextTemp = '今日已无课程';
        timeLeftTemp = '';
        nextClassTemp = '';
        classRoomTemp = '';
        classnumtoday = 1;
        name1 = '好好放松一下吧';
        room1 = '或者给我打电话！';
        time1 = '爱你哦';
        week1 = '';
        firstclasstitle = '今天没有课哦';
        break;
      default:
        break;
    }
    this.setData({
      // currentTime:weekSlotVar + '\n',
      frontText: frontTextTemp + '\n',
      // frontText: 'front text' + '\n',
      timeLeft: timeLeftTemp + '\n',
      nextClass: nextClassTemp + '\n',
      classRoom: classRoomTemp + '\n',
      firstClassName: name1,
      firstClassTime: time1,
      firstClassClassRoom: room1,
      firstClassWeekStr: week1,
      secondClassName: name2,
      secondClassTime: time2,
      secondClassClassRoom: room2,
      secondClassWeekStr: week2,
      thirdClassName: name3,
      thirdClassTime: time3,
      thirdClassClassRoom: room3,
      thirdClassWeekStr: week3,
      fourthClassName: name4,
      fourthClassTime: time4,
      fourthClassClassRoom: room4,
      fourthClassWeekStr: week4,
      fifthClassName: name5,
      fifthClassTime: time5,
      fifthClassClassRoom: room5,
      fifthClassWeekStr: week5,
      classNumToday: classnumtoday,
      firstClassTitle: firstclasstitle
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
