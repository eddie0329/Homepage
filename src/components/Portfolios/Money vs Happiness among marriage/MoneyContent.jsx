import React, { Component } from "react";
import A from "./images/a.png";
import B from "./images/b.png";
import C from "./images/c.png";
import Money_C from "./images/Money_C.png";
import Money_D from "./images/Money_D.png";
import Money_E from "./images/Money_E.png";
import Money_F from "./images/Money_F.png";

export class MoneyContent extends Component {
  render() {
    return (
      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          height: "550px",
          paddingRight: "10px"
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>0. Introduction</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;돈이 가정 생활에 얼마나 큰 영향을 미칠
          수 있는가에 대한 케이스 스터디를 진행하였습니다. 이 주제에 관하여 이미
          많은 연구가 진행되어 있습니다. 여성의 소득수준은 이혼율을 높이는
          경향이 발견되기도 하고, 총 소득수준은 이혼율을 낮추는 경향이
          발견되기도 하였습니다. 또한 소득 수준과 가구규모는 우 하향하는 패턴을
          보이기도 하였습니다. 이 스터디는 이러한 연구가 정말 신빙성이 있는지
          직접 테스트하고 경향이 똑같이 나타나는지에 대해 의구심을 던지어 시작된
          프로젝트입니다. 데이터는 한국노동패널 웹사이트의 자료를 토대로 연구를
          실시하였습니다. 자료 분석은 R 프로그램을 사용하였습니다.
        </p>

        <h2 style={{ fontWeight: "bold" }}>1. Case Study</h2>

        <h3 style={{ fontWeight: "bold" }}>1.1 Anticipations</h3>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;돈이 가정에 미치는 영향을 분석하기 위해
          가구 형태에 관해 배우자 동거 여부와 가족구성원의 수를 파악하게
          되었습니다. 결혼생활에 있어 배우자와의 동거여부는 중요한 가정생활임을
          암시하고 있고 가정 생활의 행복감과 만족감이 가구원의 수에 영향을 미칠
          것이라 판단이 되어 가구형태와 가구규모를 결혼생활의 만족감의
          메타데이터로 설정하였습니다. 이 주제에 관하여 가능 한 답변은 두가지가
          있습니다. 첫번째는 소득 수준이 높은 가구의 배우자 동거 확률이 높거나
          낮을 수 있습니다. 두번째는 가구규모를 소득수준의 함수로 표시했을 때,
          우 상향, 우 하향, U자 모양, V자 모형일 수 있습니다.
        </p>

        <h3 style={{ fontWeight: "bold" }}>1.2 15th Year</h3>
        <img
          src={A}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          -Distribution plot-
        </div>
        <div />

        <img
          src={B}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          -Linear Model-
        </div>
        <div />

        <img
          src={C}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          -Generalized Linear Model-
        </div>
        <div />

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;첫 번째 그림에서 보여 지듯이, 동거를 안
          하는 가구(=0) 보다 동거를 하는 가구(=1)가 높은 수입을 나타냅니다.
          이항분포로써 일반적인 Linear Model모델을 사용하지 않고, logistic
          linear model을 사용하였습니다. 따라서 두 번째인 Linear Model을
          사용하지 않고 세 번째인 Generalized Linear Model을 사용하였습니다. 그
          결과 유의 수준(1.53^-07)이 상당히 낮음으로 가구 형태가 총소득을
          설명하는 변수라는 것을 알 수 있었습니다. 이에 따라 가구 형태가 동거
          중이 아닌 경우 총소득은 상대적으로 동거 중인 가구보다 낮음을 알 수
          있었습니다.
        </p>

        <img
          src={Money_C}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>-QQ Plot-</div>
        <div />

        <img
          src={Money_D}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          -Distribution Plot-
        </div>
        <div />

        <img
          src={Money_E}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          -Linear Model-
        </div>
        <div />

        <img
          src={Money_F}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          -Generalized Linear Model-
        </div>
        <div />

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육안으로 두 번째 그림이 정규 분포형을
          띄고 있지만 확실히 하기 위해 QQPLOT(첫번 째 그림)을 사용하였습니다. 그
          결과(첫번째 그림)에 따라 완벽한 정규분포는 아니지만 상당한 정규분포를
          따르는 걸로 판단하여 linear regression model을 사용하였습니다. 그 결과
          유의수준(9.99^-06)이 상당히 낮은 것을 알 수 있었습니다. 따라서 가구
          규모가 총소득을 설명하는 변수라고 할 수 있었습니다. 이에 따라,
          가구규모가 커짐에 따라 일정 구간까지는 총소득이 상승하고 일정구간이
          지나면 총소득이 하락한다는 것을 알 수 있었습니다.
        </p>

        <h2 style={{ fontWeight: "bold" }}>0. Conclusion</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소득이 부부의 동거 여부와
          가구 규모를 설명 하는 설명 변수라는 사실을 알 수 있었습니다. 첫 번째
          결과 였던 동거 여부가, 가구의 형태가 동거 중이라는 것은 가정이
          상대적으로 비 동거 중인 가정보다 화목하여 가구 원 수가 비 동거 중인
          가구 원에 비하여 많은 것을 유추 해보았습니다. 그에 따라 총 소득 또한
          늘어나 총 소득 또한 증가하는 것을 유추 해보았습니다. 두 번째 결과로
          넘어 가면서, 가구 규모가 커지면서 가구원들의 소득이 종합이 되어져
          소득이 커지지만, 일정 구간을 넘기면 가구원의 수를 부양하는 부양비 빛
          기타 지출이 소득을 초과하여 총 소득은 점점 낮아 지는 것을 알 수
          있었습니다. 따라서 첫 번째 가정이었던, 동거중인 가정의 가구원의 수가
          많아 소득이 높아진다는 것은 간접적으로 증명이 되었으나, 가구 원수가
          무작정 높아진다는 것은 소득이 비 동거 중인 가정보다 높아진다는 것은
          아니라는 것을 알 수 있었습니다. 따라서 질문을 했었던 소득(돈)이 가구
          규모와 형태에 관하여 설명 변수 인 것은 맞지만 가정의 행복에 대해
          결정적인 영향을 미치는 요인은 아니라는 것을 알 수 있었습니다.
        </p>

        <h2 style={{ fontWeight: "bold" }}>Appendix A. References</h2>
      </div>
    );
  }
}

export default MoneyContent;
