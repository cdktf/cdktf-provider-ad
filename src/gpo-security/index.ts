/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpoSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID of the container the security settings belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#gpo_container GpoSecurity#gpo_container}
  */
  readonly gpoContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * account_lockout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#account_lockout GpoSecurity#account_lockout}
  */
  readonly accountLockout?: GpoSecurityAccountLockout;
  /**
  * application_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#application_log GpoSecurity#application_log}
  */
  readonly applicationLog?: GpoSecurityApplicationLog;
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log GpoSecurity#audit_log}
  */
  readonly auditLog?: GpoSecurityAuditLog;
  /**
  * event_audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#event_audit GpoSecurity#event_audit}
  */
  readonly eventAudit?: GpoSecurityEventAudit;
  /**
  * filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#filesystem GpoSecurity#filesystem}
  */
  readonly filesystem?: GpoSecurityFilesystem[] | cdktf.IResolvable;
  /**
  * kerberos_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}
  */
  readonly kerberosPolicy?: GpoSecurityKerberosPolicy;
  /**
  * password_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_policies GpoSecurity#password_policies}
  */
  readonly passwordPolicies?: GpoSecurityPasswordPolicies;
  /**
  * registry_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_keys GpoSecurity#registry_keys}
  */
  readonly registryKeys?: GpoSecurityRegistryKeys[] | cdktf.IResolvable;
  /**
  * registry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_values GpoSecurity#registry_values}
  */
  readonly registryValues?: GpoSecurityRegistryValues[] | cdktf.IResolvable;
  /**
  * restricted_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restricted_groups GpoSecurity#restricted_groups}
  */
  readonly restrictedGroups?: GpoSecurityRestrictedGroups[] | cdktf.IResolvable;
  /**
  * system_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_log GpoSecurity#system_log}
  */
  readonly systemLog?: GpoSecuritySystemLog;
  /**
  * system_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_services GpoSecurity#system_services}
  */
  readonly systemServices?: GpoSecuritySystemServices[] | cdktf.IResolvable;
}
export interface GpoSecurityAccountLockout {
  /**
  * Disconnect SMB sessions when logon hours expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#force_logoff_when_hour_expire GpoSecurity#force_logoff_when_hour_expire}
  */
  readonly forceLogoffWhenHourExpire?: string;
  /**
  * Number of failed logon attempts until a account is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_bad_count GpoSecurity#lockout_bad_count}
  */
  readonly lockoutBadCount?: string;
  /**
  * Number of minutes a locked out account must remain locked out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_duration GpoSecurity#lockout_duration}
  */
  readonly lockoutDuration?: string;
  /**
  * Number of minutes a account will remain locked after a failed logon attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#reset_lockout_count GpoSecurity#reset_lockout_count}
  */
  readonly resetLockoutCount?: string;
}

export function gpoSecurityAccountLockoutToTerraform(struct?: GpoSecurityAccountLockoutOutputReference | GpoSecurityAccountLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_logoff_when_hour_expire: cdktf.stringToTerraform(struct!.forceLogoffWhenHourExpire),
    lockout_bad_count: cdktf.stringToTerraform(struct!.lockoutBadCount),
    lockout_duration: cdktf.stringToTerraform(struct!.lockoutDuration),
    reset_lockout_count: cdktf.stringToTerraform(struct!.resetLockoutCount),
  }
}


export function gpoSecurityAccountLockoutToHclTerraform(struct?: GpoSecurityAccountLockoutOutputReference | GpoSecurityAccountLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_logoff_when_hour_expire: {
      value: cdktf.stringToHclTerraform(struct!.forceLogoffWhenHourExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockout_bad_count: {
      value: cdktf.stringToHclTerraform(struct!.lockoutBadCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockout_duration: {
      value: cdktf.stringToHclTerraform(struct!.lockoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_lockout_count: {
      value: cdktf.stringToHclTerraform(struct!.resetLockoutCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityAccountLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecurityAccountLockout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceLogoffWhenHourExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceLogoffWhenHourExpire = this._forceLogoffWhenHourExpire;
    }
    if (this._lockoutBadCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutBadCount = this._lockoutBadCount;
    }
    if (this._lockoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutDuration = this._lockoutDuration;
    }
    if (this._resetLockoutCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetLockoutCount = this._resetLockoutCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityAccountLockout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceLogoffWhenHourExpire = undefined;
      this._lockoutBadCount = undefined;
      this._lockoutDuration = undefined;
      this._resetLockoutCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceLogoffWhenHourExpire = value.forceLogoffWhenHourExpire;
      this._lockoutBadCount = value.lockoutBadCount;
      this._lockoutDuration = value.lockoutDuration;
      this._resetLockoutCount = value.resetLockoutCount;
    }
  }

  // force_logoff_when_hour_expire - computed: false, optional: true, required: false
  private _forceLogoffWhenHourExpire?: string; 
  public get forceLogoffWhenHourExpire() {
    return this.getStringAttribute('force_logoff_when_hour_expire');
  }
  public set forceLogoffWhenHourExpire(value: string) {
    this._forceLogoffWhenHourExpire = value;
  }
  public resetForceLogoffWhenHourExpire() {
    this._forceLogoffWhenHourExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceLogoffWhenHourExpireInput() {
    return this._forceLogoffWhenHourExpire;
  }

  // lockout_bad_count - computed: false, optional: true, required: false
  private _lockoutBadCount?: string; 
  public get lockoutBadCount() {
    return this.getStringAttribute('lockout_bad_count');
  }
  public set lockoutBadCount(value: string) {
    this._lockoutBadCount = value;
  }
  public resetLockoutBadCount() {
    this._lockoutBadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutBadCountInput() {
    return this._lockoutBadCount;
  }

  // lockout_duration - computed: false, optional: true, required: false
  private _lockoutDuration?: string; 
  public get lockoutDuration() {
    return this.getStringAttribute('lockout_duration');
  }
  public set lockoutDuration(value: string) {
    this._lockoutDuration = value;
  }
  public resetLockoutDuration() {
    this._lockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutDurationInput() {
    return this._lockoutDuration;
  }

  // reset_lockout_count - computed: false, optional: true, required: false
  private _resetLockoutCount?: string; 
  public get resetLockoutCount() {
    return this.getStringAttribute('reset_lockout_count');
  }
  public set resetLockoutCount(value: string) {
    this._resetLockoutCount = value;
  }
  public resetResetLockoutCount() {
    this._resetLockoutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLockoutCountInput() {
    return this._resetLockoutCount;
  }
}
export interface GpoSecurityApplicationLog {
  /**
  * Control log retention. Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}
  */
  readonly auditLogRetentionPeriod?: string;
  /**
  * Maximum size of log in KiloBytes. (64-4194240)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}
  */
  readonly maximumLogSize?: string;
  /**
  * Restrict access to logs for guest users. A non-zero value restricts access to guest users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}
  */
  readonly restrictGuestAccess?: string;
  /**
  * Number of days before new events overwrite old events. (1-365)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}
  */
  readonly retentionDays?: string;
}

export function gpoSecurityApplicationLogToTerraform(struct?: GpoSecurityApplicationLogOutputReference | GpoSecurityApplicationLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_retention_period: cdktf.stringToTerraform(struct!.auditLogRetentionPeriod),
    maximum_log_size: cdktf.stringToTerraform(struct!.maximumLogSize),
    restrict_guest_access: cdktf.stringToTerraform(struct!.restrictGuestAccess),
    retention_days: cdktf.stringToTerraform(struct!.retentionDays),
  }
}


export function gpoSecurityApplicationLogToHclTerraform(struct?: GpoSecurityApplicationLogOutputReference | GpoSecurityApplicationLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.auditLogRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_log_size: {
      value: cdktf.stringToHclTerraform(struct!.maximumLogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_guest_access: {
      value: cdktf.stringToHclTerraform(struct!.restrictGuestAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_days: {
      value: cdktf.stringToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityApplicationLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecurityApplicationLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogRetentionPeriod = this._auditLogRetentionPeriod;
    }
    if (this._maximumLogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLogSize = this._maximumLogSize;
    }
    if (this._restrictGuestAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictGuestAccess = this._restrictGuestAccess;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityApplicationLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogRetentionPeriod = undefined;
      this._maximumLogSize = undefined;
      this._restrictGuestAccess = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogRetentionPeriod = value.auditLogRetentionPeriod;
      this._maximumLogSize = value.maximumLogSize;
      this._restrictGuestAccess = value.restrictGuestAccess;
      this._retentionDays = value.retentionDays;
    }
  }

  // audit_log_retention_period - computed: false, optional: true, required: false
  private _auditLogRetentionPeriod?: string; 
  public get auditLogRetentionPeriod() {
    return this.getStringAttribute('audit_log_retention_period');
  }
  public set auditLogRetentionPeriod(value: string) {
    this._auditLogRetentionPeriod = value;
  }
  public resetAuditLogRetentionPeriod() {
    this._auditLogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogRetentionPeriodInput() {
    return this._auditLogRetentionPeriod;
  }

  // maximum_log_size - computed: false, optional: true, required: false
  private _maximumLogSize?: string; 
  public get maximumLogSize() {
    return this.getStringAttribute('maximum_log_size');
  }
  public set maximumLogSize(value: string) {
    this._maximumLogSize = value;
  }
  public resetMaximumLogSize() {
    this._maximumLogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLogSizeInput() {
    return this._maximumLogSize;
  }

  // restrict_guest_access - computed: false, optional: true, required: false
  private _restrictGuestAccess?: string; 
  public get restrictGuestAccess() {
    return this.getStringAttribute('restrict_guest_access');
  }
  public set restrictGuestAccess(value: string) {
    this._restrictGuestAccess = value;
  }
  public resetRestrictGuestAccess() {
    this._restrictGuestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictGuestAccessInput() {
    return this._restrictGuestAccess;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: string; 
  public get retentionDays() {
    return this.getStringAttribute('retention_days');
  }
  public set retentionDays(value: string) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GpoSecurityAuditLog {
  /**
  * Control log retention. Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}
  */
  readonly auditLogRetentionPeriod?: string;
  /**
  * Maximum size of log in KiloBytes. (64-4194240)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}
  */
  readonly maximumLogSize?: string;
  /**
  * Restrict access to logs for guest users. A non-zero value restricts access to guest users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}
  */
  readonly restrictGuestAccess?: string;
  /**
  * Number of days before new events overwrite old events. (1-365)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}
  */
  readonly retentionDays?: string;
}

export function gpoSecurityAuditLogToTerraform(struct?: GpoSecurityAuditLogOutputReference | GpoSecurityAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_retention_period: cdktf.stringToTerraform(struct!.auditLogRetentionPeriod),
    maximum_log_size: cdktf.stringToTerraform(struct!.maximumLogSize),
    restrict_guest_access: cdktf.stringToTerraform(struct!.restrictGuestAccess),
    retention_days: cdktf.stringToTerraform(struct!.retentionDays),
  }
}


export function gpoSecurityAuditLogToHclTerraform(struct?: GpoSecurityAuditLogOutputReference | GpoSecurityAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.auditLogRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_log_size: {
      value: cdktf.stringToHclTerraform(struct!.maximumLogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_guest_access: {
      value: cdktf.stringToHclTerraform(struct!.restrictGuestAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_days: {
      value: cdktf.stringToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityAuditLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecurityAuditLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogRetentionPeriod = this._auditLogRetentionPeriod;
    }
    if (this._maximumLogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLogSize = this._maximumLogSize;
    }
    if (this._restrictGuestAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictGuestAccess = this._restrictGuestAccess;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityAuditLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogRetentionPeriod = undefined;
      this._maximumLogSize = undefined;
      this._restrictGuestAccess = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogRetentionPeriod = value.auditLogRetentionPeriod;
      this._maximumLogSize = value.maximumLogSize;
      this._restrictGuestAccess = value.restrictGuestAccess;
      this._retentionDays = value.retentionDays;
    }
  }

  // audit_log_retention_period - computed: false, optional: true, required: false
  private _auditLogRetentionPeriod?: string; 
  public get auditLogRetentionPeriod() {
    return this.getStringAttribute('audit_log_retention_period');
  }
  public set auditLogRetentionPeriod(value: string) {
    this._auditLogRetentionPeriod = value;
  }
  public resetAuditLogRetentionPeriod() {
    this._auditLogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogRetentionPeriodInput() {
    return this._auditLogRetentionPeriod;
  }

  // maximum_log_size - computed: false, optional: true, required: false
  private _maximumLogSize?: string; 
  public get maximumLogSize() {
    return this.getStringAttribute('maximum_log_size');
  }
  public set maximumLogSize(value: string) {
    this._maximumLogSize = value;
  }
  public resetMaximumLogSize() {
    this._maximumLogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLogSizeInput() {
    return this._maximumLogSize;
  }

  // restrict_guest_access - computed: false, optional: true, required: false
  private _restrictGuestAccess?: string; 
  public get restrictGuestAccess() {
    return this.getStringAttribute('restrict_guest_access');
  }
  public set restrictGuestAccess(value: string) {
    this._restrictGuestAccess = value;
  }
  public resetRestrictGuestAccess() {
    this._restrictGuestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictGuestAccessInput() {
    return this._restrictGuestAccess;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: string; 
  public get retentionDays() {
    return this.getStringAttribute('retention_days');
  }
  public set retentionDays(value: string) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GpoSecurityEventAudit {
  /**
  * Audit credential validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_logon GpoSecurity#audit_account_logon}
  */
  readonly auditAccountLogon?: string;
  /**
  * Audit account management events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_manage GpoSecurity#audit_account_manage}
  */
  readonly auditAccountManage?: string;
  /**
  * Audit access attempts to AD objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_ds_access GpoSecurity#audit_ds_access}
  */
  readonly auditDsAccess?: string;
  /**
  * Audit logon events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_logon_events GpoSecurity#audit_logon_events}
  */
  readonly auditLogonEvents?: string;
  /**
  * Audit access attempts to non-AD objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_object_access GpoSecurity#audit_object_access}
  */
  readonly auditObjectAccess?: string;
  /**
  * Audit attempts to change a policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_policy_change GpoSecurity#audit_policy_change}
  */
  readonly auditPolicyChange?: string;
  /**
  * Audit user attempts of exercising user rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_privilege_use GpoSecurity#audit_privilege_use}
  */
  readonly auditPrivilegeUse?: string;
  /**
  * Audit process related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_process_tracking GpoSecurity#audit_process_tracking}
  */
  readonly auditProcessTracking?: string;
  /**
  * Audit system events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_system_events GpoSecurity#audit_system_events}
  */
  readonly auditSystemEvents?: string;
}

export function gpoSecurityEventAuditToTerraform(struct?: GpoSecurityEventAuditOutputReference | GpoSecurityEventAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_account_logon: cdktf.stringToTerraform(struct!.auditAccountLogon),
    audit_account_manage: cdktf.stringToTerraform(struct!.auditAccountManage),
    audit_ds_access: cdktf.stringToTerraform(struct!.auditDsAccess),
    audit_logon_events: cdktf.stringToTerraform(struct!.auditLogonEvents),
    audit_object_access: cdktf.stringToTerraform(struct!.auditObjectAccess),
    audit_policy_change: cdktf.stringToTerraform(struct!.auditPolicyChange),
    audit_privilege_use: cdktf.stringToTerraform(struct!.auditPrivilegeUse),
    audit_process_tracking: cdktf.stringToTerraform(struct!.auditProcessTracking),
    audit_system_events: cdktf.stringToTerraform(struct!.auditSystemEvents),
  }
}


export function gpoSecurityEventAuditToHclTerraform(struct?: GpoSecurityEventAuditOutputReference | GpoSecurityEventAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_account_logon: {
      value: cdktf.stringToHclTerraform(struct!.auditAccountLogon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_account_manage: {
      value: cdktf.stringToHclTerraform(struct!.auditAccountManage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_ds_access: {
      value: cdktf.stringToHclTerraform(struct!.auditDsAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_logon_events: {
      value: cdktf.stringToHclTerraform(struct!.auditLogonEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_object_access: {
      value: cdktf.stringToHclTerraform(struct!.auditObjectAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_policy_change: {
      value: cdktf.stringToHclTerraform(struct!.auditPolicyChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_privilege_use: {
      value: cdktf.stringToHclTerraform(struct!.auditPrivilegeUse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_process_tracking: {
      value: cdktf.stringToHclTerraform(struct!.auditProcessTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_system_events: {
      value: cdktf.stringToHclTerraform(struct!.auditSystemEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityEventAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecurityEventAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditAccountLogon !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAccountLogon = this._auditAccountLogon;
    }
    if (this._auditAccountManage !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAccountManage = this._auditAccountManage;
    }
    if (this._auditDsAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditDsAccess = this._auditDsAccess;
    }
    if (this._auditLogonEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogonEvents = this._auditLogonEvents;
    }
    if (this._auditObjectAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditObjectAccess = this._auditObjectAccess;
    }
    if (this._auditPolicyChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditPolicyChange = this._auditPolicyChange;
    }
    if (this._auditPrivilegeUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditPrivilegeUse = this._auditPrivilegeUse;
    }
    if (this._auditProcessTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditProcessTracking = this._auditProcessTracking;
    }
    if (this._auditSystemEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSystemEvents = this._auditSystemEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityEventAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditAccountLogon = undefined;
      this._auditAccountManage = undefined;
      this._auditDsAccess = undefined;
      this._auditLogonEvents = undefined;
      this._auditObjectAccess = undefined;
      this._auditPolicyChange = undefined;
      this._auditPrivilegeUse = undefined;
      this._auditProcessTracking = undefined;
      this._auditSystemEvents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditAccountLogon = value.auditAccountLogon;
      this._auditAccountManage = value.auditAccountManage;
      this._auditDsAccess = value.auditDsAccess;
      this._auditLogonEvents = value.auditLogonEvents;
      this._auditObjectAccess = value.auditObjectAccess;
      this._auditPolicyChange = value.auditPolicyChange;
      this._auditPrivilegeUse = value.auditPrivilegeUse;
      this._auditProcessTracking = value.auditProcessTracking;
      this._auditSystemEvents = value.auditSystemEvents;
    }
  }

  // audit_account_logon - computed: false, optional: true, required: false
  private _auditAccountLogon?: string; 
  public get auditAccountLogon() {
    return this.getStringAttribute('audit_account_logon');
  }
  public set auditAccountLogon(value: string) {
    this._auditAccountLogon = value;
  }
  public resetAuditAccountLogon() {
    this._auditAccountLogon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccountLogonInput() {
    return this._auditAccountLogon;
  }

  // audit_account_manage - computed: false, optional: true, required: false
  private _auditAccountManage?: string; 
  public get auditAccountManage() {
    return this.getStringAttribute('audit_account_manage');
  }
  public set auditAccountManage(value: string) {
    this._auditAccountManage = value;
  }
  public resetAuditAccountManage() {
    this._auditAccountManage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccountManageInput() {
    return this._auditAccountManage;
  }

  // audit_ds_access - computed: false, optional: true, required: false
  private _auditDsAccess?: string; 
  public get auditDsAccess() {
    return this.getStringAttribute('audit_ds_access');
  }
  public set auditDsAccess(value: string) {
    this._auditDsAccess = value;
  }
  public resetAuditDsAccess() {
    this._auditDsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDsAccessInput() {
    return this._auditDsAccess;
  }

  // audit_logon_events - computed: false, optional: true, required: false
  private _auditLogonEvents?: string; 
  public get auditLogonEvents() {
    return this.getStringAttribute('audit_logon_events');
  }
  public set auditLogonEvents(value: string) {
    this._auditLogonEvents = value;
  }
  public resetAuditLogonEvents() {
    this._auditLogonEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogonEventsInput() {
    return this._auditLogonEvents;
  }

  // audit_object_access - computed: false, optional: true, required: false
  private _auditObjectAccess?: string; 
  public get auditObjectAccess() {
    return this.getStringAttribute('audit_object_access');
  }
  public set auditObjectAccess(value: string) {
    this._auditObjectAccess = value;
  }
  public resetAuditObjectAccess() {
    this._auditObjectAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditObjectAccessInput() {
    return this._auditObjectAccess;
  }

  // audit_policy_change - computed: false, optional: true, required: false
  private _auditPolicyChange?: string; 
  public get auditPolicyChange() {
    return this.getStringAttribute('audit_policy_change');
  }
  public set auditPolicyChange(value: string) {
    this._auditPolicyChange = value;
  }
  public resetAuditPolicyChange() {
    this._auditPolicyChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPolicyChangeInput() {
    return this._auditPolicyChange;
  }

  // audit_privilege_use - computed: false, optional: true, required: false
  private _auditPrivilegeUse?: string; 
  public get auditPrivilegeUse() {
    return this.getStringAttribute('audit_privilege_use');
  }
  public set auditPrivilegeUse(value: string) {
    this._auditPrivilegeUse = value;
  }
  public resetAuditPrivilegeUse() {
    this._auditPrivilegeUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPrivilegeUseInput() {
    return this._auditPrivilegeUse;
  }

  // audit_process_tracking - computed: false, optional: true, required: false
  private _auditProcessTracking?: string; 
  public get auditProcessTracking() {
    return this.getStringAttribute('audit_process_tracking');
  }
  public set auditProcessTracking(value: string) {
    this._auditProcessTracking = value;
  }
  public resetAuditProcessTracking() {
    this._auditProcessTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProcessTrackingInput() {
    return this._auditProcessTracking;
  }

  // audit_system_events - computed: false, optional: true, required: false
  private _auditSystemEvents?: string; 
  public get auditSystemEvents() {
    return this.getStringAttribute('audit_system_events');
  }
  public set auditSystemEvents(value: string) {
    this._auditSystemEvents = value;
  }
  public resetAuditSystemEvents() {
    this._auditSystemEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSystemEventsInput() {
    return this._auditSystemEvents;
  }
}
export interface GpoSecurityFilesystem {
  /**
  * Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}
  */
  readonly acl: string;
  /**
  * Path of the file or directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#path GpoSecurity#path}
  */
  readonly path: string;
  /**
  * Control permission propagation. 0: Propagate permissions to all subfolders and files, 1: Replace existing permissions on all subfolders and files, 2: Do not allow permissions to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}
  */
  readonly propagationMode: string;
}

export function gpoSecurityFilesystemToTerraform(struct?: GpoSecurityFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    path: cdktf.stringToTerraform(struct!.path),
    propagation_mode: cdktf.stringToTerraform(struct!.propagationMode),
  }
}


export function gpoSecurityFilesystemToHclTerraform(struct?: GpoSecurityFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagation_mode: {
      value: cdktf.stringToHclTerraform(struct!.propagationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GpoSecurityFilesystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._propagationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationMode = this._propagationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityFilesystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._path = undefined;
      this._propagationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._path = value.path;
      this._propagationMode = value.propagationMode;
    }
  }

  // acl - computed: false, optional: false, required: true
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // propagation_mode - computed: false, optional: false, required: true
  private _propagationMode?: string; 
  public get propagationMode() {
    return this.getStringAttribute('propagation_mode');
  }
  public set propagationMode(value: string) {
    this._propagationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationModeInput() {
    return this._propagationMode;
  }
}

export class GpoSecurityFilesystemList extends cdktf.ComplexList {
  public internalValue? : GpoSecurityFilesystem[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GpoSecurityFilesystemOutputReference {
    return new GpoSecurityFilesystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpoSecurityKerberosPolicy {
  /**
  * Maximum time difference, in minutes, between the client clock and the server clock. (0-99999).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_clock_skew GpoSecurity#max_clock_skew}
  */
  readonly maxClockSkew?: string;
  /**
  * Number of days during which a ticket-granting ticket can be renewed (0-99999).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_renew_age GpoSecurity#max_renew_age}
  */
  readonly maxRenewAge?: string;
  /**
  * Maximum amount of minutes a ticket must be valid to access a service or resource. Minimum should be 10 and maximum should be equal to `max_ticket_age`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_service_age GpoSecurity#max_service_age}
  */
  readonly maxServiceAge?: string;
  /**
  * Maximum amount of hours a ticket-granting ticket is valid (0-99999).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_ticket_age GpoSecurity#max_ticket_age}
  */
  readonly maxTicketAge?: string;
  /**
  * Control if the session ticket is validated for every request. A non-zero value disables the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#ticket_validate_client GpoSecurity#ticket_validate_client}
  */
  readonly ticketValidateClient?: string;
}

export function gpoSecurityKerberosPolicyToTerraform(struct?: GpoSecurityKerberosPolicyOutputReference | GpoSecurityKerberosPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_clock_skew: cdktf.stringToTerraform(struct!.maxClockSkew),
    max_renew_age: cdktf.stringToTerraform(struct!.maxRenewAge),
    max_service_age: cdktf.stringToTerraform(struct!.maxServiceAge),
    max_ticket_age: cdktf.stringToTerraform(struct!.maxTicketAge),
    ticket_validate_client: cdktf.stringToTerraform(struct!.ticketValidateClient),
  }
}


export function gpoSecurityKerberosPolicyToHclTerraform(struct?: GpoSecurityKerberosPolicyOutputReference | GpoSecurityKerberosPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_clock_skew: {
      value: cdktf.stringToHclTerraform(struct!.maxClockSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_renew_age: {
      value: cdktf.stringToHclTerraform(struct!.maxRenewAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_service_age: {
      value: cdktf.stringToHclTerraform(struct!.maxServiceAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ticket_age: {
      value: cdktf.stringToHclTerraform(struct!.maxTicketAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_validate_client: {
      value: cdktf.stringToHclTerraform(struct!.ticketValidateClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityKerberosPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecurityKerberosPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxClockSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClockSkew = this._maxClockSkew;
    }
    if (this._maxRenewAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRenewAge = this._maxRenewAge;
    }
    if (this._maxServiceAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxServiceAge = this._maxServiceAge;
    }
    if (this._maxTicketAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTicketAge = this._maxTicketAge;
    }
    if (this._ticketValidateClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketValidateClient = this._ticketValidateClient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityKerberosPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxClockSkew = undefined;
      this._maxRenewAge = undefined;
      this._maxServiceAge = undefined;
      this._maxTicketAge = undefined;
      this._ticketValidateClient = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxClockSkew = value.maxClockSkew;
      this._maxRenewAge = value.maxRenewAge;
      this._maxServiceAge = value.maxServiceAge;
      this._maxTicketAge = value.maxTicketAge;
      this._ticketValidateClient = value.ticketValidateClient;
    }
  }

  // max_clock_skew - computed: false, optional: true, required: false
  private _maxClockSkew?: string; 
  public get maxClockSkew() {
    return this.getStringAttribute('max_clock_skew');
  }
  public set maxClockSkew(value: string) {
    this._maxClockSkew = value;
  }
  public resetMaxClockSkew() {
    this._maxClockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewInput() {
    return this._maxClockSkew;
  }

  // max_renew_age - computed: false, optional: true, required: false
  private _maxRenewAge?: string; 
  public get maxRenewAge() {
    return this.getStringAttribute('max_renew_age');
  }
  public set maxRenewAge(value: string) {
    this._maxRenewAge = value;
  }
  public resetMaxRenewAge() {
    this._maxRenewAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRenewAgeInput() {
    return this._maxRenewAge;
  }

  // max_service_age - computed: false, optional: true, required: false
  private _maxServiceAge?: string; 
  public get maxServiceAge() {
    return this.getStringAttribute('max_service_age');
  }
  public set maxServiceAge(value: string) {
    this._maxServiceAge = value;
  }
  public resetMaxServiceAge() {
    this._maxServiceAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServiceAgeInput() {
    return this._maxServiceAge;
  }

  // max_ticket_age - computed: false, optional: true, required: false
  private _maxTicketAge?: string; 
  public get maxTicketAge() {
    return this.getStringAttribute('max_ticket_age');
  }
  public set maxTicketAge(value: string) {
    this._maxTicketAge = value;
  }
  public resetMaxTicketAge() {
    this._maxTicketAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTicketAgeInput() {
    return this._maxTicketAge;
  }

  // ticket_validate_client - computed: false, optional: true, required: false
  private _ticketValidateClient?: string; 
  public get ticketValidateClient() {
    return this.getStringAttribute('ticket_validate_client');
  }
  public set ticketValidateClient(value: string) {
    this._ticketValidateClient = value;
  }
  public resetTicketValidateClient() {
    this._ticketValidateClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketValidateClientInput() {
    return this._ticketValidateClient;
  }
}
export interface GpoSecurityPasswordPolicies {
  /**
  * Store password with reversible encryption (0-2^16). The password will not be stored with reversible encryption if the value is set to 0. Reversible encryption will be used in any other case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#clear_text_password GpoSecurity#clear_text_password}
  */
  readonly clearTextPassword?: string;
  /**
  * Number of days before password expires (-1-999). If set to -1, it means the password never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_password_age GpoSecurity#maximum_password_age}
  */
  readonly maximumPasswordAge?: string;
  /**
  * Number of days a password must be used before changing it (0-999).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_age GpoSecurity#minimum_password_age}
  */
  readonly minimumPasswordAge?: string;
  /**
  * Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_length GpoSecurity#minimum_password_length}
  */
  readonly minimumPasswordLength?: string;
  /**
  * Password must meet complexity requirements (0-2^16). If set to 0, then requirements do not apply, any other value means requirements are applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_complexity GpoSecurity#password_complexity}
  */
  readonly passwordComplexity?: string;
  /**
  * The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16).  A value of 0 indicates that the password history is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_history_size GpoSecurity#password_history_size}
  */
  readonly passwordHistorySize?: string;
}

export function gpoSecurityPasswordPoliciesToTerraform(struct?: GpoSecurityPasswordPoliciesOutputReference | GpoSecurityPasswordPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_text_password: cdktf.stringToTerraform(struct!.clearTextPassword),
    maximum_password_age: cdktf.stringToTerraform(struct!.maximumPasswordAge),
    minimum_password_age: cdktf.stringToTerraform(struct!.minimumPasswordAge),
    minimum_password_length: cdktf.stringToTerraform(struct!.minimumPasswordLength),
    password_complexity: cdktf.stringToTerraform(struct!.passwordComplexity),
    password_history_size: cdktf.stringToTerraform(struct!.passwordHistorySize),
  }
}


export function gpoSecurityPasswordPoliciesToHclTerraform(struct?: GpoSecurityPasswordPoliciesOutputReference | GpoSecurityPasswordPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_text_password: {
      value: cdktf.stringToHclTerraform(struct!.clearTextPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_password_age: {
      value: cdktf.stringToHclTerraform(struct!.maximumPasswordAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_password_age: {
      value: cdktf.stringToHclTerraform(struct!.minimumPasswordAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_password_length: {
      value: cdktf.stringToHclTerraform(struct!.minimumPasswordLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_complexity: {
      value: cdktf.stringToHclTerraform(struct!.passwordComplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_history_size: {
      value: cdktf.stringToHclTerraform(struct!.passwordHistorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityPasswordPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecurityPasswordPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearTextPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearTextPassword = this._clearTextPassword;
    }
    if (this._maximumPasswordAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPasswordAge = this._maximumPasswordAge;
    }
    if (this._minimumPasswordAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPasswordAge = this._minimumPasswordAge;
    }
    if (this._minimumPasswordLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPasswordLength = this._minimumPasswordLength;
    }
    if (this._passwordComplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordComplexity = this._passwordComplexity;
    }
    if (this._passwordHistorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHistorySize = this._passwordHistorySize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityPasswordPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clearTextPassword = undefined;
      this._maximumPasswordAge = undefined;
      this._minimumPasswordAge = undefined;
      this._minimumPasswordLength = undefined;
      this._passwordComplexity = undefined;
      this._passwordHistorySize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clearTextPassword = value.clearTextPassword;
      this._maximumPasswordAge = value.maximumPasswordAge;
      this._minimumPasswordAge = value.minimumPasswordAge;
      this._minimumPasswordLength = value.minimumPasswordLength;
      this._passwordComplexity = value.passwordComplexity;
      this._passwordHistorySize = value.passwordHistorySize;
    }
  }

  // clear_text_password - computed: false, optional: true, required: false
  private _clearTextPassword?: string; 
  public get clearTextPassword() {
    return this.getStringAttribute('clear_text_password');
  }
  public set clearTextPassword(value: string) {
    this._clearTextPassword = value;
  }
  public resetClearTextPassword() {
    this._clearTextPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTextPasswordInput() {
    return this._clearTextPassword;
  }

  // maximum_password_age - computed: false, optional: true, required: false
  private _maximumPasswordAge?: string; 
  public get maximumPasswordAge() {
    return this.getStringAttribute('maximum_password_age');
  }
  public set maximumPasswordAge(value: string) {
    this._maximumPasswordAge = value;
  }
  public resetMaximumPasswordAge() {
    this._maximumPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPasswordAgeInput() {
    return this._maximumPasswordAge;
  }

  // minimum_password_age - computed: false, optional: true, required: false
  private _minimumPasswordAge?: string; 
  public get minimumPasswordAge() {
    return this.getStringAttribute('minimum_password_age');
  }
  public set minimumPasswordAge(value: string) {
    this._minimumPasswordAge = value;
  }
  public resetMinimumPasswordAge() {
    this._minimumPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordAgeInput() {
    return this._minimumPasswordAge;
  }

  // minimum_password_length - computed: false, optional: true, required: false
  private _minimumPasswordLength?: string; 
  public get minimumPasswordLength() {
    return this.getStringAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: string) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // password_complexity - computed: false, optional: true, required: false
  private _passwordComplexity?: string; 
  public get passwordComplexity() {
    return this.getStringAttribute('password_complexity');
  }
  public set passwordComplexity(value: string) {
    this._passwordComplexity = value;
  }
  public resetPasswordComplexity() {
    this._passwordComplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordComplexityInput() {
    return this._passwordComplexity;
  }

  // password_history_size - computed: false, optional: true, required: false
  private _passwordHistorySize?: string; 
  public get passwordHistorySize() {
    return this.getStringAttribute('password_history_size');
  }
  public set passwordHistorySize(value: string) {
    this._passwordHistorySize = value;
  }
  public resetPasswordHistorySize() {
    this._passwordHistorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistorySizeInput() {
    return this._passwordHistorySize;
  }
}
export interface GpoSecurityRegistryKeys {
  /**
  * Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}
  */
  readonly acl: string;
  /**
  * Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}
  */
  readonly keyName: string;
  /**
  * Control permission propagation. 0: Propagate permissions to all subkeys, 1: Replace existing permissions on all subkeys, 2: Do not allow permissions to be replaced on the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}
  */
  readonly propagationMode: string;
}

export function gpoSecurityRegistryKeysToTerraform(struct?: GpoSecurityRegistryKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    propagation_mode: cdktf.stringToTerraform(struct!.propagationMode),
  }
}


export function gpoSecurityRegistryKeysToHclTerraform(struct?: GpoSecurityRegistryKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagation_mode: {
      value: cdktf.stringToHclTerraform(struct!.propagationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityRegistryKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GpoSecurityRegistryKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._propagationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationMode = this._propagationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityRegistryKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._keyName = undefined;
      this._propagationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._keyName = value.keyName;
      this._propagationMode = value.propagationMode;
    }
  }

  // acl - computed: false, optional: false, required: true
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // propagation_mode - computed: false, optional: false, required: true
  private _propagationMode?: string; 
  public get propagationMode() {
    return this.getStringAttribute('propagation_mode');
  }
  public set propagationMode(value: string) {
    this._propagationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationModeInput() {
    return this._propagationMode;
  }
}

export class GpoSecurityRegistryKeysList extends cdktf.ComplexList {
  public internalValue? : GpoSecurityRegistryKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GpoSecurityRegistryKeysOutputReference {
    return new GpoSecurityRegistryKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpoSecurityRegistryValues {
  /**
  * Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}
  */
  readonly keyName: string;
  /**
  * The value of the key, matching the type set in `value_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value GpoSecurity#value}
  */
  readonly value: string;
  /**
  * Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value_type GpoSecurity#value_type}
  */
  readonly valueType: string;
}

export function gpoSecurityRegistryValuesToTerraform(struct?: GpoSecurityRegistryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function gpoSecurityRegistryValuesToHclTerraform(struct?: GpoSecurityRegistryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityRegistryValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GpoSecurityRegistryValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityRegistryValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyName = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyName = value.keyName;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class GpoSecurityRegistryValuesList extends cdktf.ComplexList {
  public internalValue? : GpoSecurityRegistryValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GpoSecurityRegistryValuesOutputReference {
    return new GpoSecurityRegistryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpoSecurityRestrictedGroups {
  /**
  * Comma separated list of group names or SIDs that this group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_memberof GpoSecurity#group_memberof}
  */
  readonly groupMemberof: string;
  /**
  * Comma separated list of group names or SIDs that are members of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_members GpoSecurity#group_members}
  */
  readonly groupMembers: string;
  /**
  * Name of the group we are managing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_name GpoSecurity#group_name}
  */
  readonly groupName: string;
}

export function gpoSecurityRestrictedGroupsToTerraform(struct?: GpoSecurityRestrictedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_memberof: cdktf.stringToTerraform(struct!.groupMemberof),
    group_members: cdktf.stringToTerraform(struct!.groupMembers),
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function gpoSecurityRestrictedGroupsToHclTerraform(struct?: GpoSecurityRestrictedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_memberof: {
      value: cdktf.stringToHclTerraform(struct!.groupMemberof),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_members: {
      value: cdktf.stringToHclTerraform(struct!.groupMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecurityRestrictedGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GpoSecurityRestrictedGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupMemberof !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMemberof = this._groupMemberof;
    }
    if (this._groupMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMembers = this._groupMembers;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecurityRestrictedGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupMemberof = undefined;
      this._groupMembers = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupMemberof = value.groupMemberof;
      this._groupMembers = value.groupMembers;
      this._groupName = value.groupName;
    }
  }

  // group_memberof - computed: false, optional: false, required: true
  private _groupMemberof?: string; 
  public get groupMemberof() {
    return this.getStringAttribute('group_memberof');
  }
  public set groupMemberof(value: string) {
    this._groupMemberof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberofInput() {
    return this._groupMemberof;
  }

  // group_members - computed: false, optional: false, required: true
  private _groupMembers?: string; 
  public get groupMembers() {
    return this.getStringAttribute('group_members');
  }
  public set groupMembers(value: string) {
    this._groupMembers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembersInput() {
    return this._groupMembers;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class GpoSecurityRestrictedGroupsList extends cdktf.ComplexList {
  public internalValue? : GpoSecurityRestrictedGroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GpoSecurityRestrictedGroupsOutputReference {
    return new GpoSecurityRestrictedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpoSecuritySystemLog {
  /**
  * Control log retention. Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}
  */
  readonly auditLogRetentionPeriod?: string;
  /**
  * Maximum size of log in KiloBytes. (64-4194240)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}
  */
  readonly maximumLogSize?: string;
  /**
  * Restrict access to logs for guest users. A non-zero value restricts access to guest users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}
  */
  readonly restrictGuestAccess?: string;
  /**
  * Number of days before new events overwrite old events. (1-365)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}
  */
  readonly retentionDays?: string;
}

export function gpoSecuritySystemLogToTerraform(struct?: GpoSecuritySystemLogOutputReference | GpoSecuritySystemLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_retention_period: cdktf.stringToTerraform(struct!.auditLogRetentionPeriod),
    maximum_log_size: cdktf.stringToTerraform(struct!.maximumLogSize),
    restrict_guest_access: cdktf.stringToTerraform(struct!.restrictGuestAccess),
    retention_days: cdktf.stringToTerraform(struct!.retentionDays),
  }
}


export function gpoSecuritySystemLogToHclTerraform(struct?: GpoSecuritySystemLogOutputReference | GpoSecuritySystemLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.auditLogRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_log_size: {
      value: cdktf.stringToHclTerraform(struct!.maximumLogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_guest_access: {
      value: cdktf.stringToHclTerraform(struct!.restrictGuestAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_days: {
      value: cdktf.stringToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecuritySystemLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpoSecuritySystemLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogRetentionPeriod = this._auditLogRetentionPeriod;
    }
    if (this._maximumLogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLogSize = this._maximumLogSize;
    }
    if (this._restrictGuestAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictGuestAccess = this._restrictGuestAccess;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecuritySystemLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogRetentionPeriod = undefined;
      this._maximumLogSize = undefined;
      this._restrictGuestAccess = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogRetentionPeriod = value.auditLogRetentionPeriod;
      this._maximumLogSize = value.maximumLogSize;
      this._restrictGuestAccess = value.restrictGuestAccess;
      this._retentionDays = value.retentionDays;
    }
  }

  // audit_log_retention_period - computed: false, optional: true, required: false
  private _auditLogRetentionPeriod?: string; 
  public get auditLogRetentionPeriod() {
    return this.getStringAttribute('audit_log_retention_period');
  }
  public set auditLogRetentionPeriod(value: string) {
    this._auditLogRetentionPeriod = value;
  }
  public resetAuditLogRetentionPeriod() {
    this._auditLogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogRetentionPeriodInput() {
    return this._auditLogRetentionPeriod;
  }

  // maximum_log_size - computed: false, optional: true, required: false
  private _maximumLogSize?: string; 
  public get maximumLogSize() {
    return this.getStringAttribute('maximum_log_size');
  }
  public set maximumLogSize(value: string) {
    this._maximumLogSize = value;
  }
  public resetMaximumLogSize() {
    this._maximumLogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLogSizeInput() {
    return this._maximumLogSize;
  }

  // restrict_guest_access - computed: false, optional: true, required: false
  private _restrictGuestAccess?: string; 
  public get restrictGuestAccess() {
    return this.getStringAttribute('restrict_guest_access');
  }
  public set restrictGuestAccess(value: string) {
    this._restrictGuestAccess = value;
  }
  public resetRestrictGuestAccess() {
    this._restrictGuestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictGuestAccessInput() {
    return this._restrictGuestAccess;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: string; 
  public get retentionDays() {
    return this.getStringAttribute('retention_days');
  }
  public set retentionDays(value: string) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GpoSecuritySystemServices {
  /**
  * Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}
  */
  readonly acl: string;
  /**
  * Name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#service_name GpoSecurity#service_name}
  */
  readonly serviceName: string;
  /**
  * Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#startup_mode GpoSecurity#startup_mode}
  */
  readonly startupMode: string;
}

export function gpoSecuritySystemServicesToTerraform(struct?: GpoSecuritySystemServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    startup_mode: cdktf.stringToTerraform(struct!.startupMode),
  }
}


export function gpoSecuritySystemServicesToHclTerraform(struct?: GpoSecuritySystemServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_mode: {
      value: cdktf.stringToHclTerraform(struct!.startupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpoSecuritySystemServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GpoSecuritySystemServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._startupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupMode = this._startupMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpoSecuritySystemServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._serviceName = undefined;
      this._startupMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._serviceName = value.serviceName;
      this._startupMode = value.startupMode;
    }
  }

  // acl - computed: false, optional: false, required: true
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // startup_mode - computed: false, optional: false, required: true
  private _startupMode?: string; 
  public get startupMode() {
    return this.getStringAttribute('startup_mode');
  }
  public set startupMode(value: string) {
    this._startupMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startupModeInput() {
    return this._startupMode;
  }
}

export class GpoSecuritySystemServicesList extends cdktf.ComplexList {
  public internalValue? : GpoSecuritySystemServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GpoSecuritySystemServicesOutputReference {
    return new GpoSecuritySystemServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security ad_gpo_security}
*/
export class GpoSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_gpo_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpoSecurity to import
  * @param importFromId The id of the existing GpoSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpoSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ad_gpo_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security ad_gpo_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpoSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: GpoSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'ad_gpo_security',
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
    this._gpoContainer = config.gpoContainer;
    this._id = config.id;
    this._accountLockout.internalValue = config.accountLockout;
    this._applicationLog.internalValue = config.applicationLog;
    this._auditLog.internalValue = config.auditLog;
    this._eventAudit.internalValue = config.eventAudit;
    this._filesystem.internalValue = config.filesystem;
    this._kerberosPolicy.internalValue = config.kerberosPolicy;
    this._passwordPolicies.internalValue = config.passwordPolicies;
    this._registryKeys.internalValue = config.registryKeys;
    this._registryValues.internalValue = config.registryValues;
    this._restrictedGroups.internalValue = config.restrictedGroups;
    this._systemLog.internalValue = config.systemLog;
    this._systemServices.internalValue = config.systemServices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gpo_container - computed: false, optional: false, required: true
  private _gpoContainer?: string; 
  public get gpoContainer() {
    return this.getStringAttribute('gpo_container');
  }
  public set gpoContainer(value: string) {
    this._gpoContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpoContainerInput() {
    return this._gpoContainer;
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

  // account_lockout - computed: false, optional: true, required: false
  private _accountLockout = new GpoSecurityAccountLockoutOutputReference(this, "account_lockout");
  public get accountLockout() {
    return this._accountLockout;
  }
  public putAccountLockout(value: GpoSecurityAccountLockout) {
    this._accountLockout.internalValue = value;
  }
  public resetAccountLockout() {
    this._accountLockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockoutInput() {
    return this._accountLockout.internalValue;
  }

  // application_log - computed: false, optional: true, required: false
  private _applicationLog = new GpoSecurityApplicationLogOutputReference(this, "application_log");
  public get applicationLog() {
    return this._applicationLog;
  }
  public putApplicationLog(value: GpoSecurityApplicationLog) {
    this._applicationLog.internalValue = value;
  }
  public resetApplicationLog() {
    this._applicationLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogInput() {
    return this._applicationLog.internalValue;
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new GpoSecurityAuditLogOutputReference(this, "audit_log");
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: GpoSecurityAuditLog) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }

  // event_audit - computed: false, optional: true, required: false
  private _eventAudit = new GpoSecurityEventAuditOutputReference(this, "event_audit");
  public get eventAudit() {
    return this._eventAudit;
  }
  public putEventAudit(value: GpoSecurityEventAudit) {
    this._eventAudit.internalValue = value;
  }
  public resetEventAudit() {
    this._eventAudit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventAuditInput() {
    return this._eventAudit.internalValue;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem = new GpoSecurityFilesystemList(this, "filesystem", true);
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: GpoSecurityFilesystem[] | cdktf.IResolvable) {
    this._filesystem.internalValue = value;
  }
  public resetFilesystem() {
    this._filesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // kerberos_policy - computed: false, optional: true, required: false
  private _kerberosPolicy = new GpoSecurityKerberosPolicyOutputReference(this, "kerberos_policy");
  public get kerberosPolicy() {
    return this._kerberosPolicy;
  }
  public putKerberosPolicy(value: GpoSecurityKerberosPolicy) {
    this._kerberosPolicy.internalValue = value;
  }
  public resetKerberosPolicy() {
    this._kerberosPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPolicyInput() {
    return this._kerberosPolicy.internalValue;
  }

  // password_policies - computed: false, optional: true, required: false
  private _passwordPolicies = new GpoSecurityPasswordPoliciesOutputReference(this, "password_policies");
  public get passwordPolicies() {
    return this._passwordPolicies;
  }
  public putPasswordPolicies(value: GpoSecurityPasswordPolicies) {
    this._passwordPolicies.internalValue = value;
  }
  public resetPasswordPolicies() {
    this._passwordPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPoliciesInput() {
    return this._passwordPolicies.internalValue;
  }

  // registry_keys - computed: false, optional: true, required: false
  private _registryKeys = new GpoSecurityRegistryKeysList(this, "registry_keys", true);
  public get registryKeys() {
    return this._registryKeys;
  }
  public putRegistryKeys(value: GpoSecurityRegistryKeys[] | cdktf.IResolvable) {
    this._registryKeys.internalValue = value;
  }
  public resetRegistryKeys() {
    this._registryKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryKeysInput() {
    return this._registryKeys.internalValue;
  }

  // registry_values - computed: false, optional: true, required: false
  private _registryValues = new GpoSecurityRegistryValuesList(this, "registry_values", true);
  public get registryValues() {
    return this._registryValues;
  }
  public putRegistryValues(value: GpoSecurityRegistryValues[] | cdktf.IResolvable) {
    this._registryValues.internalValue = value;
  }
  public resetRegistryValues() {
    this._registryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryValuesInput() {
    return this._registryValues.internalValue;
  }

  // restricted_groups - computed: false, optional: true, required: false
  private _restrictedGroups = new GpoSecurityRestrictedGroupsList(this, "restricted_groups", true);
  public get restrictedGroups() {
    return this._restrictedGroups;
  }
  public putRestrictedGroups(value: GpoSecurityRestrictedGroups[] | cdktf.IResolvable) {
    this._restrictedGroups.internalValue = value;
  }
  public resetRestrictedGroups() {
    this._restrictedGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedGroupsInput() {
    return this._restrictedGroups.internalValue;
  }

  // system_log - computed: false, optional: true, required: false
  private _systemLog = new GpoSecuritySystemLogOutputReference(this, "system_log");
  public get systemLog() {
    return this._systemLog;
  }
  public putSystemLog(value: GpoSecuritySystemLog) {
    this._systemLog.internalValue = value;
  }
  public resetSystemLog() {
    this._systemLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLogInput() {
    return this._systemLog.internalValue;
  }

  // system_services - computed: false, optional: true, required: false
  private _systemServices = new GpoSecuritySystemServicesList(this, "system_services", true);
  public get systemServices() {
    return this._systemServices;
  }
  public putSystemServices(value: GpoSecuritySystemServices[] | cdktf.IResolvable) {
    this._systemServices.internalValue = value;
  }
  public resetSystemServices() {
    this._systemServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemServicesInput() {
    return this._systemServices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gpo_container: cdktf.stringToTerraform(this._gpoContainer),
      id: cdktf.stringToTerraform(this._id),
      account_lockout: gpoSecurityAccountLockoutToTerraform(this._accountLockout.internalValue),
      application_log: gpoSecurityApplicationLogToTerraform(this._applicationLog.internalValue),
      audit_log: gpoSecurityAuditLogToTerraform(this._auditLog.internalValue),
      event_audit: gpoSecurityEventAuditToTerraform(this._eventAudit.internalValue),
      filesystem: cdktf.listMapper(gpoSecurityFilesystemToTerraform, true)(this._filesystem.internalValue),
      kerberos_policy: gpoSecurityKerberosPolicyToTerraform(this._kerberosPolicy.internalValue),
      password_policies: gpoSecurityPasswordPoliciesToTerraform(this._passwordPolicies.internalValue),
      registry_keys: cdktf.listMapper(gpoSecurityRegistryKeysToTerraform, true)(this._registryKeys.internalValue),
      registry_values: cdktf.listMapper(gpoSecurityRegistryValuesToTerraform, true)(this._registryValues.internalValue),
      restricted_groups: cdktf.listMapper(gpoSecurityRestrictedGroupsToTerraform, true)(this._restrictedGroups.internalValue),
      system_log: gpoSecuritySystemLogToTerraform(this._systemLog.internalValue),
      system_services: cdktf.listMapper(gpoSecuritySystemServicesToTerraform, true)(this._systemServices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gpo_container: {
        value: cdktf.stringToHclTerraform(this._gpoContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_lockout: {
        value: gpoSecurityAccountLockoutToHclTerraform(this._accountLockout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecurityAccountLockoutList",
      },
      application_log: {
        value: gpoSecurityApplicationLogToHclTerraform(this._applicationLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecurityApplicationLogList",
      },
      audit_log: {
        value: gpoSecurityAuditLogToHclTerraform(this._auditLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecurityAuditLogList",
      },
      event_audit: {
        value: gpoSecurityEventAuditToHclTerraform(this._eventAudit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecurityEventAuditList",
      },
      filesystem: {
        value: cdktf.listMapperHcl(gpoSecurityFilesystemToHclTerraform, true)(this._filesystem.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GpoSecurityFilesystemList",
      },
      kerberos_policy: {
        value: gpoSecurityKerberosPolicyToHclTerraform(this._kerberosPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecurityKerberosPolicyList",
      },
      password_policies: {
        value: gpoSecurityPasswordPoliciesToHclTerraform(this._passwordPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecurityPasswordPoliciesList",
      },
      registry_keys: {
        value: cdktf.listMapperHcl(gpoSecurityRegistryKeysToHclTerraform, true)(this._registryKeys.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GpoSecurityRegistryKeysList",
      },
      registry_values: {
        value: cdktf.listMapperHcl(gpoSecurityRegistryValuesToHclTerraform, true)(this._registryValues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GpoSecurityRegistryValuesList",
      },
      restricted_groups: {
        value: cdktf.listMapperHcl(gpoSecurityRestrictedGroupsToHclTerraform, true)(this._restrictedGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GpoSecurityRestrictedGroupsList",
      },
      system_log: {
        value: gpoSecuritySystemLogToHclTerraform(this._systemLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpoSecuritySystemLogList",
      },
      system_services: {
        value: cdktf.listMapperHcl(gpoSecuritySystemServicesToHclTerraform, true)(this._systemServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GpoSecuritySystemServicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
