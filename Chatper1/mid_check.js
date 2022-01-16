function statement(invocie, plays) {
  let result = `청구 내역 //...;`;

  for (let perf of invocie.performances) {
    result += `blah blah`;
  }
  result += `총액 ~~`;
  result += `적립 포인트 ~~`;
  return result;
}

function totalAmount() {
  let result = 0;

  for (let perf of invoice.performances) {
    result += amountFor(perf);
  }
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function volumeCredits(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if('comedy' === //..)

  return result;
}

function amountFor(aPerformance) {
  let result = 0;
  // switch(playFor(aPerformance).type) ...

  return result;
}
