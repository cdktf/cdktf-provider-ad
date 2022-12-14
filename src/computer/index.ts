// https://www.terraform.io/docs/providers/ad/r/computer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DN of the container used to hold the computer account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#container Computer#container}
  */
  readonly container?: string;
  /**
  * Specifies a description of the object. This parameter sets the value of the Description property for the computer object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#description Computer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#id Computer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the computer account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#name Computer#name}
  */
  readonly name: string;
  /**
  * The pre-win2k name for the computer account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#pre2kname Computer#pre2kname}
  */
  readonly pre2Kname?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ad/r/computer ad_computer}
*/
export class Computer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_computer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ad/r/computer ad_computer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputerConfig
  */
  public constructor(scope: Construct, id: string, config: ComputerConfig) {
    super(scope, id, {
      terraformResourceType: 'ad_computer',
      terraformGeneratorMetadata: {
        providerName: 'ad',
        providerVersion: '0.4.4',
        providerVersionConstraint: '~> 0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._container = config.container;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._pre2Kname = config.pre2Kname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pre2kname - computed: true, optional: true, required: false
  private _pre2Kname?: string; 
  public get pre2Kname() {
    return this.getStringAttribute('pre2kname');
  }
  public set pre2Kname(value: string) {
    this._pre2Kname = value;
  }
  public resetPre2Kname() {
    this._pre2Kname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pre2KnameInput() {
    return this._pre2Kname;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container: cdktf.stringToTerraform(this._container),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pre2kname: cdktf.stringToTerraform(this._pre2Kname),
    };
  }
}
