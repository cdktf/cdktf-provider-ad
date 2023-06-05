/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GplinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls the state of the GP link between a GPO and a container object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#enabled Gplink#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the GPO will be enforced on the container object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#enforced Gplink#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the GPO that will be linked to the container object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#gpo_guid Gplink#gpo_guid}
  */
  readonly gpoGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#id Gplink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets the precedence between multiple GPOs linked to the same container object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#order Gplink#order}
  */
  readonly order?: number;
  /**
  * The DN of the object the GPO will be linked to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#target_dn Gplink#target_dn}
  */
  readonly targetDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink ad_gplink}
*/
export class Gplink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_gplink";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink ad_gplink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GplinkConfig
  */
  public constructor(scope: Construct, id: string, config: GplinkConfig) {
    super(scope, id, {
      terraformResourceType: 'ad_gplink',
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
    this._enabled = config.enabled;
    this._enforced = config.enforced;
    this._gpoGuid = config.gpoGuid;
    this._id = config.id;
    this._order = config.order;
    this._targetDn = config.targetDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforced - computed: false, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // gpo_guid - computed: false, optional: false, required: true
  private _gpoGuid?: string; 
  public get gpoGuid() {
    return this.getStringAttribute('gpo_guid');
  }
  public set gpoGuid(value: string) {
    this._gpoGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpoGuidInput() {
    return this._gpoGuid;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // target_dn - computed: false, optional: false, required: true
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      enforced: cdktf.booleanToTerraform(this._enforced),
      gpo_guid: cdktf.stringToTerraform(this._gpoGuid),
      id: cdktf.stringToTerraform(this._id),
      order: cdktf.numberToTerraform(this._order),
      target_dn: cdktf.stringToTerraform(this._targetDn),
    };
  }
}
