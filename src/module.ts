import { PanelPlugin } from '@grafana/data';
import { FanPanel } from './FanPanel';
import { FanOptions } from './types';

export const plugin = new PanelPlugin<FanOptions>(FanPanel)
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
      .addSelect({
        path: 'colorMode',
        name: 'Color mode',
        settings: {
          options: [
            {
              value: 'thresholds',
              label: 'From thresholds',
            },
            {
              value: 'speed',
              label: 'From speed',
            },
            {
              value: 'fixed',
              label: 'Fixed color',
            },
          ],
        },
        defaultValue: 'fixed',
      })
      .addColorPicker({
        path: 'color',
        name: 'Color',
        showIf: currentConfig => currentConfig.colorMode === 'fixed',
      })
  )
  .setNoPadding();
