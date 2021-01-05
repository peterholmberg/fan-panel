import React, { FC } from 'react';
import { css, cx, keyframes } from 'emotion';
import { PanelProps } from '@grafana/data';
import { stylesFactory } from '@grafana/ui';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export const FanPanel: FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles(width, height);
  return (
    <div className={styles.panelWrapper}>
      <div className={styles.fanContainer}>
        <div className={styles.left} />
        <div className={styles.right} />
        <div className={styles.top} />
        <div className={styles.bottom} />
      </div>
    </div>
  );
};

const getStyles = stylesFactory((width: number, height: number) => {
  const size = width < height ? width : height;
  const spin = keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `;

  const fan = css`
    display: block;
    background: #ccc;
    border-radius: 5px;
    position: absolute;
    box-shadow: inset 1px 1px 40px #555;

    &:after {
      content: '';
      position: absolute;
      background: #666;
      display: block;
    }
  `;

  const horizontal = css`
    width: auto;
    height: 50px;
    top: 50%;
    margin-top: -25px;
    transform: skewX(20deg);

    &:after {
      top: 25%;
      width: 15px;
      height: 50%;
    }
  `;

  const vertical = css`
    width: 50px;
    height: auto;
    left: 50%;
    margin-left: -25px;
    transform: skewY(20deg);

    &:after {
      height: 15px;
      width: 50%;
      margin-left: 25%;
    }
  `;

  return {
    panelWrapper: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    `,
    fanContainer: css`
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          position: relative;
          display: inline-block;
          animation: ${spin} 1s linear infinite;

          &:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            margin-left: -35px;
            margin-top: -35px;
            background: #444;
            box-shadow: inset 0 0 0 8px #444444, inset 0 1px 5px 22px #383838;
        `,
    left: cx(
      fan,
      horizontal,
      css`
        left: 0;
        right: 50%;
        margin-right: 45px;
        // border-radius: 14px 5px 5px 40px;
        border-radius: 50% 15px 15px 50%;

        &:after {
          left: 100%;
        }
      `
    ),
    right: cx(
      fan,
      horizontal,
      css`
        right: 0;
        left: 50%;
        margin-left: 45px;
        // border-radius: 5px 40px 14px 5px;
        border-radius: 15px 50% 50% 15px;

        &:after {
          right: 100%;
        }
      `
    ),
    top: cx(
      fan,
      vertical,
      css`
        top: 0;
        bottom: 50%;
        margin-bottom: 45px;
        // border-radius: 40px 14px 5px 5px;
        border-radius: 50% 50% 15px 15px;

        &:after {
          top: 100%;
        }
      `
    ),
    bottom: cx(
      fan,
      vertical,
      css`
        top: 50%;
        bottom: 0;
        margin-top: 45px;
        // border-radius: 5px 5px 40px 14px;
        border-radius: 15px 15px 50% 50%;

        &:after {
          bottom: 100%;
        }
      `
    ),
  };
});
