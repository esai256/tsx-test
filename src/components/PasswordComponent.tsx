import { Prop, Component, Vue } from "vue-property-decorator";
import ILabeledComponent from "./ILabeledComponent";
import IInputComponent from "./IInputComponent";
import IValidatedInputComponent from "./IValidatedInputComponent";

@Component
export default class PasswordComponent
  extends Vue
  implements
  ILabeledComponent,
  IInputComponent<string>,
  IValidatedInputComponent<string> {
  @Prop({ default: '' }) value: string = '';
  @Prop({ default: '' }) label: string = '';
  @Prop({ default: '' }) errorMessage: string = '';
  @Prop({ default: false }) isValidationActive: boolean = false;

  get isValueValid() {
    return this.validationFunction(this.value);
  }

  validationFunction(value: string) {
    return true;
  }

  render() {
    const classes: string[] = [];

    if (!this.isValueValid) {
      classes.push('invalid');
    }
    return (
      <div>

        <label>{this.label}</label>

        <input
          class={classes.join(' ')}
          type="password"
          value={this.value}
          onInput={e => this.$emit('input', e.target.value)}
        />

        {
          this.isValidationActive
          && this.isValueValid
          && <span>{this.errorMessage}</span>
        }

      </div>
    );
  }
}
