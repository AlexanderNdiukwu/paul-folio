import React from 'react';
import styled, { css } from 'styled-components';

const Loader = ({ size = 'md' }) => {
  return (
    <StyledWrapper size={size}>
      <div className="loader">
        <svg
          viewBox="0 0 6 6"
          className="light bi bi-lightning-charge-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const sizeStyles = {
  sm: css`
    .loader {
      width: 40px;
      height: 15px;
      padding: 2px;
      border-width: 4px;
    }

    .light {
      left: 8px;
      width: 10px;
      height: 10px;
    }

    .loader::before {
      width: 6px;
    }
  `,
  md: css`
    .loader {
      width: 80px;
      height: 25px;
      padding: 3px;
      border-width: 2px;
    }

    .light {
      left: 22px;
      width: 20px;
      height: 20px;
    }

    .loader::before {
      width: 10px;
    }
  `,
  lg: css`
    .loader {
      width: 120px;
      height: 40px;
      padding: 4px;
      border-width: 3px;
    }

    .light {
      left: 30px;
      width: 28px;
      height: 28px;
    }

    .loader::before {
      width: 14px;
    }
  `,
};

const StyledWrapper = styled.div`
  .loader {
    border-style: solid;
    border-color: #00c2ff;
    border-right-color: transparent;
    background: repeating-linear-gradient(90deg, #00c2ff 0 10px, #0000 0 15px)
      left/0% 100% no-repeat content-box content-box;
    position: relative;
    animation: p5 2s infinite steps(6);
  }

  .light {
    position: absolute;
    fill: rgba(37, 37, 37, 0.774);
  }

  .loader::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    background: linear-gradient(
        #0000 calc(50% - 7px),
        #00c2ff 0 calc(50% - 5px),
        #0000 0 calc(50% + 5px),
        #00c2ff 0 calc(50% + 7px),
        #0000 0
      )
      left / 100% 100%,
      linear-gradient(#00c2ff calc(50% - 5px), #0000 0 calc(50% + 5px), #00c2ff 0)
        left / 2px 100%,
      linear-gradient(#0000 calc(50% - 5px), #00c2ff 0 calc(50% + 5px), #0000 0)
        right/2px 100%;
    background-repeat: no-repeat;
  }

  @keyframes p5 {
    100% {
      background-size: 120% 100%;
    }
  }

  ${({ size }) => sizeStyles[size]}
`;

export default Loader;
