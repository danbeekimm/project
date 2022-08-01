import React, { useEffect, useState } from 'react';
import './JobPostingDetail.css';

const { kakao } = window;

const KaokaoMap = ({ com_addr, setCom_addr }) => {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 5
    };
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch(com_addr, function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:250px;text-align:center;padding:6px 0;font-size:12px">${com_addr}</div>`
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    })

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

  });

  return (
    <div className='myMap' id='myMap'>
    </div>
  );
}


export default KaokaoMap; 