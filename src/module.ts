import { PanelPlugin } from '@grafana/data';
import { FanPanel } from './FanPanel';
import { FanOptions } from './types';

export const plugin = new PanelPlugin<FanOptions>(FanPanel)
  .useFieldConfig()
  .setPanelOptions(builder =>
    builder
      .addNumberInput({
        path: 'maxSpeed',
        name: 'Fan max speed',
        defaultValue: 1200,
      })
      .addNumberInput({
        path: 'minSpeed',
        name: 'Fan min speed',
        defaultValue: 0,
      })
  )
  .setNoPadding();
