// https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the group. This can be a GUID, a SID, a Distinguished Name, or the SAM Account Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/group_membership#group_id GroupMembership#group_id}
  */
  readonly groupId: string;
  /**
  * A list of member AD Principals. Each principal can be identified by its GUID, SID, Distinguished Name, or SAM Account Name. Only one is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/group_membership#group_members GroupMembership#group_members}
  */
  readonly groupMembers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/group_membership#id GroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/group_membership ad_group_membership}
*/
export class GroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_group_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/group_membership ad_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'ad_group_membership',
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
    this._groupId = config.groupId;
    this._groupMembers = config.groupMembers;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_members - computed: false, optional: false, required: true
  private _groupMembers?: string[]; 
  public get groupMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('group_members'));
  }
  public set groupMembers(value: string[]) {
    this._groupMembers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembersInput() {
    return this._groupMembers;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      group_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupMembers),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
