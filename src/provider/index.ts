/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdProviderConfig {
  /**
  * Use a specific domain controller. (default: none, environment variable: AD_DC)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#domain_controller AdProvider#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_conf AdProvider#krb_conf}
  */
  readonly krbConf?: string;
  /**
  * Path to a keytab file to be used instead of a password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_keytab AdProvider#krb_keytab}
  */
  readonly krbKeytab?: string;
  /**
  * The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_realm AdProvider#krb_realm}
  */
  readonly krbRealm?: string;
  /**
  * Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_spn AdProvider#krb_spn}
  */
  readonly krbSpn?: string;
  /**
  * The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_hostname AdProvider#winrm_hostname}
  */
  readonly winrmHostname: string;
  /**
  * Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_insecure AdProvider#winrm_insecure}
  */
  readonly winrmInsecure?: boolean | cdktf.IResolvable;
  /**
  * Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_pass_credentials AdProvider#winrm_pass_credentials}
  */
  readonly winrmPassCredentials?: boolean | cdktf.IResolvable;
  /**
  * The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_password AdProvider#winrm_password}
  */
  readonly winrmPassword: string;
  /**
  * The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_port AdProvider#winrm_port}
  */
  readonly winrmPort?: number;
  /**
  * The WinRM protocol we will use. (default: http, environment variable: AD_PROTO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_proto AdProvider#winrm_proto}
  */
  readonly winrmProto?: string;
  /**
  * Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_use_ntlm AdProvider#winrm_use_ntlm}
  */
  readonly winrmUseNtlm?: boolean | cdktf.IResolvable;
  /**
  * The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_username AdProvider#winrm_username}
  */
  readonly winrmUsername: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#alias AdProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs ad}
*/
export class AdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs ad} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AdProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'ad',
      terraformGeneratorMetadata: {
        providerName: 'ad',
        providerVersion: '0.4.4',
        providerVersionConstraint: '~> 0.4'
      },
      terraformProviderSource: 'ad'
    });
    this._domainController = config.domainController;
    this._krbConf = config.krbConf;
    this._krbKeytab = config.krbKeytab;
    this._krbRealm = config.krbRealm;
    this._krbSpn = config.krbSpn;
    this._winrmHostname = config.winrmHostname;
    this._winrmInsecure = config.winrmInsecure;
    this._winrmPassCredentials = config.winrmPassCredentials;
    this._winrmPassword = config.winrmPassword;
    this._winrmPort = config.winrmPort;
    this._winrmProto = config.winrmProto;
    this._winrmUseNtlm = config.winrmUseNtlm;
    this._winrmUsername = config.winrmUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this._domainController;
  }
  public set domainController(value: string | undefined) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
  }

  // krb_conf - computed: false, optional: true, required: false
  private _krbConf?: string; 
  public get krbConf() {
    return this._krbConf;
  }
  public set krbConf(value: string | undefined) {
    this._krbConf = value;
  }
  public resetKrbConf() {
    this._krbConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbConfInput() {
    return this._krbConf;
  }

  // krb_keytab - computed: false, optional: true, required: false
  private _krbKeytab?: string; 
  public get krbKeytab() {
    return this._krbKeytab;
  }
  public set krbKeytab(value: string | undefined) {
    this._krbKeytab = value;
  }
  public resetKrbKeytab() {
    this._krbKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbKeytabInput() {
    return this._krbKeytab;
  }

  // krb_realm - computed: false, optional: true, required: false
  private _krbRealm?: string; 
  public get krbRealm() {
    return this._krbRealm;
  }
  public set krbRealm(value: string | undefined) {
    this._krbRealm = value;
  }
  public resetKrbRealm() {
    this._krbRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbRealmInput() {
    return this._krbRealm;
  }

  // krb_spn - computed: false, optional: true, required: false
  private _krbSpn?: string; 
  public get krbSpn() {
    return this._krbSpn;
  }
  public set krbSpn(value: string | undefined) {
    this._krbSpn = value;
  }
  public resetKrbSpn() {
    this._krbSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbSpnInput() {
    return this._krbSpn;
  }

  // winrm_hostname - computed: false, optional: false, required: true
  private _winrmHostname?: string; 
  public get winrmHostname() {
    return this._winrmHostname;
  }
  public set winrmHostname(value: string | undefined) {
    this._winrmHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmHostnameInput() {
    return this._winrmHostname;
  }

  // winrm_insecure - computed: false, optional: true, required: false
  private _winrmInsecure?: boolean | cdktf.IResolvable; 
  public get winrmInsecure() {
    return this._winrmInsecure;
  }
  public set winrmInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._winrmInsecure = value;
  }
  public resetWinrmInsecure() {
    this._winrmInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmInsecureInput() {
    return this._winrmInsecure;
  }

  // winrm_pass_credentials - computed: false, optional: true, required: false
  private _winrmPassCredentials?: boolean | cdktf.IResolvable; 
  public get winrmPassCredentials() {
    return this._winrmPassCredentials;
  }
  public set winrmPassCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._winrmPassCredentials = value;
  }
  public resetWinrmPassCredentials() {
    this._winrmPassCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmPassCredentialsInput() {
    return this._winrmPassCredentials;
  }

  // winrm_password - computed: false, optional: false, required: true
  private _winrmPassword?: string; 
  public get winrmPassword() {
    return this._winrmPassword;
  }
  public set winrmPassword(value: string | undefined) {
    this._winrmPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmPasswordInput() {
    return this._winrmPassword;
  }

  // winrm_port - computed: false, optional: true, required: false
  private _winrmPort?: number; 
  public get winrmPort() {
    return this._winrmPort;
  }
  public set winrmPort(value: number | undefined) {
    this._winrmPort = value;
  }
  public resetWinrmPort() {
    this._winrmPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmPortInput() {
    return this._winrmPort;
  }

  // winrm_proto - computed: false, optional: true, required: false
  private _winrmProto?: string; 
  public get winrmProto() {
    return this._winrmProto;
  }
  public set winrmProto(value: string | undefined) {
    this._winrmProto = value;
  }
  public resetWinrmProto() {
    this._winrmProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmProtoInput() {
    return this._winrmProto;
  }

  // winrm_use_ntlm - computed: false, optional: true, required: false
  private _winrmUseNtlm?: boolean | cdktf.IResolvable; 
  public get winrmUseNtlm() {
    return this._winrmUseNtlm;
  }
  public set winrmUseNtlm(value: boolean | cdktf.IResolvable | undefined) {
    this._winrmUseNtlm = value;
  }
  public resetWinrmUseNtlm() {
    this._winrmUseNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmUseNtlmInput() {
    return this._winrmUseNtlm;
  }

  // winrm_username - computed: false, optional: false, required: true
  private _winrmUsername?: string; 
  public get winrmUsername() {
    return this._winrmUsername;
  }
  public set winrmUsername(value: string | undefined) {
    this._winrmUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmUsernameInput() {
    return this._winrmUsername;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_controller: cdktf.stringToTerraform(this._domainController),
      krb_conf: cdktf.stringToTerraform(this._krbConf),
      krb_keytab: cdktf.stringToTerraform(this._krbKeytab),
      krb_realm: cdktf.stringToTerraform(this._krbRealm),
      krb_spn: cdktf.stringToTerraform(this._krbSpn),
      winrm_hostname: cdktf.stringToTerraform(this._winrmHostname),
      winrm_insecure: cdktf.booleanToTerraform(this._winrmInsecure),
      winrm_pass_credentials: cdktf.booleanToTerraform(this._winrmPassCredentials),
      winrm_password: cdktf.stringToTerraform(this._winrmPassword),
      winrm_port: cdktf.numberToTerraform(this._winrmPort),
      winrm_proto: cdktf.stringToTerraform(this._winrmProto),
      winrm_use_ntlm: cdktf.booleanToTerraform(this._winrmUseNtlm),
      winrm_username: cdktf.stringToTerraform(this._winrmUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
