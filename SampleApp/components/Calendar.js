import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {CalendarList} from 'react-native-calendars'
import Moment from 'react-moment';


export function NewView({route}){

  const { day } = route.params
  //day는 json형테의 object입ㄴ디ㅏ
  console.log(JSON.stringify(day))
  const dateString = day.dateString
  //로그기록 확인해보세요
  console.log(dateString)
  //위의 date는 새로운 function,component을 생성하거나 내부에서 moment로 다루면 됩니다
  return(
    <View>
          <Text>
            {dateString}
          </Text>
    </View>
  )
}

export function CalendarScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CalendarList
            //캘린더 리스트는 캘린더의 params를 기본적으로 가지고 있습니다
            //이 param들은 default 형태가 있으니 필요하실 때만 적어주세요(필요할 때만 적어주셔도 된다는 이야기입니다)
            // 처음 앱을 켰을 때 보이는 날짜
            current={'2020-01-26'}
            //최소 날짜
            minDate={'2020-01-01'}
            //최대 날짜
            maxDate={'2020-12-31'}
          
            // 날짜가 눌렸을 때 어떤 것을 실행하도록 하는 핸들러 console.log부분에 다른 component나 함수를 넣어주시면 됩니다
            // day object 넘겨주기
            // https://reactnavigation.org/docs/params/ 참고해주세요
            onDayPress={(day) => {navigation.navigate('NewView',{day: day});}}
            // 날짜가 길게 눌렸을 때 어떤 것을 실행하도록 하는 핸들러 console.log부분에 다른 component나 함수를 넣어주시면 됩니다
            onDayLongPress={(day) => {console.log('selected day', day)}}
            // 캘린더 맨 위에 있는 날짜 포맷을 결정해줍니다 다른 형태로 수정하고 싶으시면
            // Formatting values: http://arshaw.com/xdate/#Formatting 여기를 참고해주세요
            monthFormat={'yyyy MM'}
            // 월이 바뀌었을 때 어떤 것을 실행하도록 하는 핸들러 입니다. console.log부분에 다른 component나 함수를 집어 넣으면 됩니다
            onMonthChange={(month) => {console.log('month changed', month)}}
            // 월 사이를 오가는 화살표 표시를 숨기냐 마냐 입니다
            hideArrows={false}
            // 기존의 화살표를 커스텀 화살표로 바꾸게 해주는 Param입니다.
            // renderArrow={(direction) => (<Arrow/>)}
            // 20일, 혹은 31일 이후에 1일부터 시작하는 부분이나, 1일 이전에 31,30일 등등이 표시되냐 마냐입니다
            hideExtraDays={true}
            //월을 바꿀 수 있게 하냐 마냐입니다
            disableMonthChange={false}
            //firstday=1이면 주가 월요일부터 시작합니다
            firstDay={1}
            // 요일 이름 없애기
            hideDayNames={false}
            // 몇 주인지 보이기
            showWeekNumbers={false}
            // 왼쪽 Arrow를 눌렀을 때 월을 빼도록 하는 것
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // 오른쪽 Arrow를 눌렀을 때 월을 더하도록 하는 것
            onPressArrowRight={addMonth => addMonth()}
            // 왼쪽 화살표 무효화하기
            disableArrowLeft={false}
            // 오른쪽 화살표 무효화하기
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Replace default month and year title with custom one. the function receive a date as parameter.
            // renderHeader={(date) => {/*Return JSX*/}}
            //페이지 사이로 스와이프 하는 옵션
            enableSwipeMonths={true}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            //이전 스크롤 할 수 있는 페이지범위
            pastScrollRange={50}
            //다음 스크롤 할 수 있는 페이지
            futureScrollRange={50}
            // 캘린더 리스트의 스크롤 허용하는 옵션
            scrollEnabled={true}
            //스크롤바 보이게 하는 옵션
            showScrollIndicator={true}
            //수평으로 달력을 넘길 수 있게 하는 옵션
            horizontal={true}
            //페이지 단위로 보여지게 하는 옵션
            pagingEnabled={true}
            
            />
      </View>
    );
  }
  