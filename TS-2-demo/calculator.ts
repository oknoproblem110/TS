type UserData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturnRate: number;
  duration: number;
};

type ResultData = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarnd: number;
};

type FinalResultData = ResultData[] | string;

function calculateInvestment(data: UserData): FinalResultData {
  const { initialAmount, annualContribution, expectedReturnRate, duration } =
    data;

  if (initialAmount < 0) {
    return "Can not save money less then 0!";
  }

  if (annualContribution < 0) {
    return "Annual contribution can not be less then 0!";
  }

  if (expectedReturnRate < 0) {
    return "Expected return Rate can not be less then 0!";
  }

  if (duration < 3) {
    return "Duration can not be less then 3!";
  }

  let totalAmount = initialAmount;
  let totalContributions = 0;
  let totalInterestEarnd = 0;

  const annualResults: ResultData[] = [];

  for (let i = 0; i < duration; i++) {
    totalAmount = totalAmount * (1 + expectedReturnRate);
    totalInterestEarnd = totalAmount - totalContributions;
    totalContributions = totalContributions + annualContribution;
    totalAmount = totalAmount + totalContributions;

    annualResults.push({
      year: `year ${i + 1}`,
      totalAmount, // totalAmount: totalAmount
      totalContributions, // totalContributions: totalContributions
      totalInterestEarnd, // totalInterestEarnd: totalInterestEarnd
    });
  }

  return annualResults;
}

function printResult(printItem: FinalResultData) {
  if (typeof printItem === "string") {
    console.log(printItem);

    return;
  }

  for (const item of printItem) {
    console.log(item.year);
    console.log(`Total Amount: ${item.totalAmount.toFixed(2)}`);
    console.log(`Total Contributions: ${item.totalContributions.toFixed(2)}`);
    console.log(`Total Interest Earmed: ${item.totalInterestEarnd.toFixed(2)}`);
    console.log("-------------------------");
  }
}

const userData1: UserData = {
  initialAmount: 6980,
  annualContribution: 25000,
  expectedReturnRate: 0.05,
  duration: 12.4,
};

const investData1 = calculateInvestment(userData1);
printResult(investData1);

const userData2: UserData = {
  initialAmount: -50,
  annualContribution: 25000,
  expectedReturnRate: 0.05,
  duration: 8,
};

const investData2 = calculateInvestment(userData2);
printResult(investData2);
