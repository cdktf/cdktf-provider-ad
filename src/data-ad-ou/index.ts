/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdOuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Distinguished Name of the OU object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#dn DataAdOu#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the OU object. If this is used then the `path` attribute needs to be set as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#name DataAdOu#name}
  */
  readonly name?: string;
  /**
  * The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#ou_id DataAdOu#ou_id}
  */
  readonly ouId?: string;
  /**
  * Path of the OU object. If this is used then the `Name` attribute needs to be set as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#path DataAdOu#path}
  */
  readonly path?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou ad_ou}
*/
export class DataAdOu extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_ou";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou ad_ou} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdOuConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAdOuConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ad_ou',
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
    this._dn = config.dn;
    this._id = config.id;
    this._name = config.name;
    this._ouId = config.ouId;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ou_id - computed: false, optional: true, required: false
  private _ouId?: string; 
  public get ouId() {
    return this.getStringAttribute('ou_id');
  }
  public set ouId(value: string) {
    this._ouId = value;
  }
  public resetOuId() {
    this._ouId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouIdInput() {
    return this._ouId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getStringAttribute('protected');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dn: cdktf.stringToTerraform(this._dn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ou_id: cdktf.stringToTerraform(this._ouId),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
