import { Vue, Component, Prop } from 'vue-property-decorator';
import IInputComponent from './IInputComponent';
import ILabeledComponent from './ILabeledComponent';

@Component
export default class TextComponent
  extends Vue
  implements
  IInputComponent<string>,
  ILabeledComponent {
  @Prop({ default: '' }) value: string = '';
  @Prop({ default: '' }) label: string = '';

  render() {
    return (
      <div>
        <label>{this.label}</label>
        <input
          type="text"
          value={this.value}
          onInput={e => this.$emit('input', e.target.value)}
        />
      </div>
    );
  }
}
