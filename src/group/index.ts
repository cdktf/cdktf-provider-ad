// https://www.terraform.io/docs/providers/ad/r/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group's category. Can be one of `distribution` or `security` (case sensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#category Group#category}
  */
  readonly category?: string;
  /**
  * A DN of a container object holding the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#container Group#container}
  */
  readonly container: string;
  /**
  * Description of the Group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#name Group#name}
  */
  readonly name: string;
  /**
  * The pre-win2k name of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#sam_account_name Group#sam_account_name}
  */
  readonly samAccountName: string;
  /**
  * The group's scope. Can be one of `global`, `domainlocal`, or `universal` (case sensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#scope Group#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ad/r/group ad_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ad/r/group ad_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ad_group',
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
    this._category = config.category;
    this._container = config.container;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._samAccountName = config.samAccountName;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
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

  // sam_account_name - computed: false, optional: false, required: true
  private _samAccountName?: string; 
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
  }
  public set samAccountName(value: string) {
    this._samAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samAccountNameInput() {
    return this._samAccountName;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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
      category: cdktf.stringToTerraform(this._category),
      container: cdktf.stringToTerraform(this._container),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sam_account_name: cdktf.stringToTerraform(this._samAccountName),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }
}
