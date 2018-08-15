import { Vue, Component, Prop } from 'vue-property-decorator';
import IInputComponent from './IInputComponent';

@Component
export default class ToggleComponent extends Vue implements IInputComponent<boolean> {
  @Prop({ default: false }) value: boolean = false;

  render() {
    return (
      <input
        type="checkbox"
        checked={this.value}
        onChange={e => this.$emit('change', e.target.checked)}
      />
    );
  }
}
