import http from 'k6/http';
import { check } from 'k6';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000, // 초당 1000개의 요청
      timeUnit: '1s',
      duration: '100s', // 총 1000초 동안 실행
      preAllocatedVUs: 100, // 미리 할당된 가상 사용자 수
      maxVUs: 200, // 최대 가상 사용자 수
    },
  },
};

export default function () {
  const url = 'http://localhost:3000/speed/uuidv7'; // 테스트할 엔드포인트
  const payload = JSON.stringify({ data: `test-${__VU}-${__ITER}` });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.get(`${url}?data=test-${__VU}-${__ITER}`, params);

  // 응답 코드가 200인지 확인
  check(res, { 'status was 200': (r) => r.status === 200 });
}
