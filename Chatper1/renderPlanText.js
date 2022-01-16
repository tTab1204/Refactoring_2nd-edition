function statement(invoice, plays) {
  return renderPlainText(invoice, plays);
}

function renderPlainText(invocie, plays) {
  let result = `청구 내역 //...;`;

  for (let perf of invocie.performances) {
    result += `blah blah`;
  }
  result += `총액 ~~`;
  result += `적립 포인트 ~~`;
  return result;
}

// ...
