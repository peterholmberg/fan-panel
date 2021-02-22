import React, {PureComponent} from 'react';
import {
  DisplayValueAlignmentFactors,
  FieldDisplay,
  getFieldDisplayValues,
  PanelProps,
  VizOrientation
} from '@grafana/data';
import {VizRepeater, VizRepeaterRenderValueProps} from '@grafana/ui';
import {config} from '@grafana/runtime';
import {Fan} from "./Fan";
import {FanOptions} from 'types';

interface Props extends PanelProps<FanOptions> {
}

export class FanPanel extends PureComponent<Props> {
  renderFans = (valueProps: VizRepeaterRenderValueProps<FieldDisplay, DisplayValueAlignmentFactors>): JSX.Element => {
    const {height, width} = this.props;
    const {value} = valueProps;

    return (
      <Fan height={height} width={width} value={value} maxSpeed={1200} minSpeed={0}  />
    )
  }

  render() {
    const {fieldConfig, data, width, height, replaceVariables, renderCounter} = this.props
    const displayValues = getFieldDisplayValues({
      data: data.series,
      fieldConfig,
      reduceOptions: {calcs: ['last']},
      theme: config.theme,
      replaceVariables
    });

    return (
      <VizRepeater source={data} renderValue={this.renderFans} orientation={VizOrientation.Auto}
                   getValues={() => displayValues} height={height}
                   width={width} renderCounter={renderCounter} />
    );
  }
}


