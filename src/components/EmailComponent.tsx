import { Vue, Component, Prop } from 'vue-property-decorator';
import { IInputComponent } from './IInputComponent';
import { IValidatedInputComponent } from './IValidatedInputComponent';
import './EmailComponent.scss';

@Component
export default class EmailComponent
  extends Vue
  implements
  IInputComponent<string>,
  IValidatedInputComponent<string>
{
  @Prop({ default: '' }) value: string = '';

  validationFunction(value: string): boolean {
    return false;
  }

  get isValueValid(): boolean {
    return this.validationFunction(this.value);
  }

  render() {
    const classes: string[] = [];

    if (!this.isValueValid) {
      classes.push('invalid');
    }

    return (
      <input
        class={classes.join('')}
        type="email"
        value={this.value}
        onInput={e => this.$emit('input', e.target.value)}
      />
    );
  }
}
