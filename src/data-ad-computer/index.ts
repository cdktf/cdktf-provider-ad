// https://www.terraform.io/docs/providers/ad/d/computer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdComputerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#computer_id DataAdComputer#computer_id}
  */
  readonly computerId?: string;
  /**
  * The Distinguished Name of the computer object. This field is deprecated in favour of `computer_id`. In the future this field will be read-only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#dn DataAdComputer#dn}
  */
  readonly dn?: string;
  /**
  * The GUID of the computer object. This field is deprecated in favour of `computer_id`. In the future this field will be read-only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#guid DataAdComputer#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#id DataAdComputer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ad/d/computer ad_computer}
*/
export class DataAdComputer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_computer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ad/d/computer ad_computer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdComputerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAdComputerConfig = {}) {
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
    this._computerId = config.computerId;
    this._dn = config.dn;
    this._guid = config.guid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // computer_id - computed: false, optional: true, required: false
  private _computerId?: string; 
  public get computerId() {
    return this.getStringAttribute('computer_id');
  }
  public set computerId(value: string) {
    this._computerId = value;
  }
  public resetComputerId() {
    this._computerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerIdInput() {
    return this._computerId;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // guid - computed: false, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
      computer_id: cdktf.stringToTerraform(this._computerId),
      dn: cdktf.stringToTerraform(this._dn),
      guid: cdktf.stringToTerraform(this._guid),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
