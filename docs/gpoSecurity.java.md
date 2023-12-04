# `gpoSecurity` Submodule <a name="`gpoSecurity` Submodule" id="@cdktf/provider-ad.gpoSecurity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GpoSecurity <a name="GpoSecurity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security ad_gpo_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurity;

GpoSecurity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .gpoContainer(java.lang.String)
//  .accountLockout(GpoSecurityAccountLockout)
//  .applicationLog(GpoSecurityApplicationLog)
//  .auditLog(GpoSecurityAuditLog)
//  .eventAudit(GpoSecurityEventAudit)
//  .filesystem(IResolvable)
//  .filesystem(java.util.List<GpoSecurityFilesystem>)
//  .id(java.lang.String)
//  .kerberosPolicy(GpoSecurityKerberosPolicy)
//  .passwordPolicies(GpoSecurityPasswordPolicies)
//  .registryKeys(IResolvable)
//  .registryKeys(java.util.List<GpoSecurityRegistryKeys>)
//  .registryValues(IResolvable)
//  .registryValues(java.util.List<GpoSecurityRegistryValues>)
//  .restrictedGroups(IResolvable)
//  .restrictedGroups(java.util.List<GpoSecurityRestrictedGroups>)
//  .systemLog(GpoSecuritySystemLog)
//  .systemServices(IResolvable)
//  .systemServices(java.util.List<GpoSecuritySystemServices>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.gpoContainer">gpoContainer</a></code> | <code>java.lang.String</code> | The GUID of the container the security settings belong to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.accountLockout">accountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | account_lockout block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.applicationLog">applicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | application_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.auditLog">auditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | audit_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.eventAudit">eventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | event_audit block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.filesystem">filesystem</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>></code> | filesystem block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.kerberosPolicy">kerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | kerberos_policy block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.passwordPolicies">passwordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | password_policies block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.registryKeys">registryKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>></code> | registry_keys block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.registryValues">registryValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>></code> | registry_values block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.restrictedGroups">restrictedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>></code> | restricted_groups block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.systemLog">systemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | system_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.systemServices">systemServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>></code> | system_services block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.gpoContainer"></a>

- *Type:* java.lang.String

The GUID of the container the security settings belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#gpo_container GpoSecurity#gpo_container}

---

##### `accountLockout`<sup>Optional</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.accountLockout"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

account_lockout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#account_lockout GpoSecurity#account_lockout}

---

##### `applicationLog`<sup>Optional</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.applicationLog"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

application_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#application_log GpoSecurity#application_log}

---

##### `auditLog`<sup>Optional</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.auditLog"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log GpoSecurity#audit_log}

---

##### `eventAudit`<sup>Optional</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.eventAudit"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

event_audit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#event_audit GpoSecurity#event_audit}

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.filesystem"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>>

filesystem block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#filesystem GpoSecurity#filesystem}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosPolicy`<sup>Optional</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.kerberosPolicy"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

kerberos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}

---

##### `passwordPolicies`<sup>Optional</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.passwordPolicies"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

password_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_policies GpoSecurity#password_policies}

---

##### `registryKeys`<sup>Optional</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.registryKeys"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>>

registry_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_keys GpoSecurity#registry_keys}

---

##### `registryValues`<sup>Optional</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.registryValues"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>>

registry_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_values GpoSecurity#registry_values}

---

##### `restrictedGroups`<sup>Optional</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.restrictedGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>>

restricted_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restricted_groups GpoSecurity#restricted_groups}

---

##### `systemLog`<sup>Optional</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.systemLog"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

system_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_log GpoSecurity#system_log}

---

##### `systemServices`<sup>Optional</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.systemServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>>

system_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_services GpoSecurity#system_services}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout">putAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog">putApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog">putAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit">putEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem">putFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy">putKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies">putPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys">putRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues">putRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups">putRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog">putSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices">putSystemServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout">resetAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog">resetApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog">resetAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit">resetEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem">resetFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy">resetKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies">resetPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys">resetRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues">resetRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups">resetRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog">resetSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices">resetSystemServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountLockout` <a name="putAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout"></a>

```java
public void putAccountLockout(GpoSecurityAccountLockout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `putApplicationLog` <a name="putApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog"></a>

```java
public void putApplicationLog(GpoSecurityApplicationLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `putAuditLog` <a name="putAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog"></a>

```java
public void putAuditLog(GpoSecurityAuditLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `putEventAudit` <a name="putEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit"></a>

```java
public void putEventAudit(GpoSecurityEventAudit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `putFilesystem` <a name="putFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem"></a>

```java
public void putFilesystem(IResolvable OR java.util.List<GpoSecurityFilesystem> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>>

---

##### `putKerberosPolicy` <a name="putKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy"></a>

```java
public void putKerberosPolicy(GpoSecurityKerberosPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `putPasswordPolicies` <a name="putPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies"></a>

```java
public void putPasswordPolicies(GpoSecurityPasswordPolicies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `putRegistryKeys` <a name="putRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys"></a>

```java
public void putRegistryKeys(IResolvable OR java.util.List<GpoSecurityRegistryKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>>

---

##### `putRegistryValues` <a name="putRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues"></a>

```java
public void putRegistryValues(IResolvable OR java.util.List<GpoSecurityRegistryValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>>

---

##### `putRestrictedGroups` <a name="putRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups"></a>

```java
public void putRestrictedGroups(IResolvable OR java.util.List<GpoSecurityRestrictedGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>>

---

##### `putSystemLog` <a name="putSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog"></a>

```java
public void putSystemLog(GpoSecuritySystemLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `putSystemServices` <a name="putSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices"></a>

```java
public void putSystemServices(IResolvable OR java.util.List<GpoSecuritySystemServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>>

---

##### `resetAccountLockout` <a name="resetAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout"></a>

```java
public void resetAccountLockout()
```

##### `resetApplicationLog` <a name="resetApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog"></a>

```java
public void resetApplicationLog()
```

##### `resetAuditLog` <a name="resetAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog"></a>

```java
public void resetAuditLog()
```

##### `resetEventAudit` <a name="resetEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit"></a>

```java
public void resetEventAudit()
```

##### `resetFilesystem` <a name="resetFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem"></a>

```java
public void resetFilesystem()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId"></a>

```java
public void resetId()
```

##### `resetKerberosPolicy` <a name="resetKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy"></a>

```java
public void resetKerberosPolicy()
```

##### `resetPasswordPolicies` <a name="resetPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies"></a>

```java
public void resetPasswordPolicies()
```

##### `resetRegistryKeys` <a name="resetRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys"></a>

```java
public void resetRegistryKeys()
```

##### `resetRegistryValues` <a name="resetRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues"></a>

```java
public void resetRegistryValues()
```

##### `resetRestrictedGroups` <a name="resetRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups"></a>

```java
public void resetRestrictedGroups()
```

##### `resetSystemLog` <a name="resetSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog"></a>

```java
public void resetSystemLog()
```

##### `resetSystemServices` <a name="resetSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices"></a>

```java
public void resetSystemServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurity;

GpoSecurity.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurity;

GpoSecurity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurity;

GpoSecurity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurity;

GpoSecurity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GpoSecurity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GpoSecurity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GpoSecurity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GpoSecurity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout">accountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog">applicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog">auditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit">eventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem">filesystem</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy">kerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies">passwordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys">registryKeys</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues">registryValues</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups">restrictedGroups</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog">systemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices">systemServices</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput">accountLockoutInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput">applicationLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput">auditLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput">eventAuditInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput">filesystemInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput">gpoContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput">kerberosPolicyInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput">passwordPoliciesInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput">registryKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput">registryValuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput">restrictedGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput">systemLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput">systemServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer">gpoContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountLockout`<sup>Required</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout"></a>

```java
public GpoSecurityAccountLockoutOutputReference getAccountLockout();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a>

---

##### `applicationLog`<sup>Required</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog"></a>

```java
public GpoSecurityApplicationLogOutputReference getApplicationLog();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a>

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog"></a>

```java
public GpoSecurityAuditLogOutputReference getAuditLog();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a>

---

##### `eventAudit`<sup>Required</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit"></a>

```java
public GpoSecurityEventAuditOutputReference getEventAudit();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a>

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem"></a>

```java
public GpoSecurityFilesystemList getFilesystem();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a>

---

##### `kerberosPolicy`<sup>Required</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy"></a>

```java
public GpoSecurityKerberosPolicyOutputReference getKerberosPolicy();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a>

---

##### `passwordPolicies`<sup>Required</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies"></a>

```java
public GpoSecurityPasswordPoliciesOutputReference getPasswordPolicies();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a>

---

##### `registryKeys`<sup>Required</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys"></a>

```java
public GpoSecurityRegistryKeysList getRegistryKeys();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a>

---

##### `registryValues`<sup>Required</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues"></a>

```java
public GpoSecurityRegistryValuesList getRegistryValues();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a>

---

##### `restrictedGroups`<sup>Required</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups"></a>

```java
public GpoSecurityRestrictedGroupsList getRestrictedGroups();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a>

---

##### `systemLog`<sup>Required</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog"></a>

```java
public GpoSecuritySystemLogOutputReference getSystemLog();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a>

---

##### `systemServices`<sup>Required</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices"></a>

```java
public GpoSecuritySystemServicesList getSystemServices();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a>

---

##### `accountLockoutInput`<sup>Optional</sup> <a name="accountLockoutInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput"></a>

```java
public GpoSecurityAccountLockout getAccountLockoutInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `applicationLogInput`<sup>Optional</sup> <a name="applicationLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput"></a>

```java
public GpoSecurityApplicationLog getApplicationLogInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput"></a>

```java
public GpoSecurityAuditLog getAuditLogInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `eventAuditInput`<sup>Optional</sup> <a name="eventAuditInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput"></a>

```java
public GpoSecurityEventAudit getEventAuditInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `filesystemInput`<sup>Optional</sup> <a name="filesystemInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput"></a>

```java
public java.lang.Object getFilesystemInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>>

---

##### `gpoContainerInput`<sup>Optional</sup> <a name="gpoContainerInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput"></a>

```java
public java.lang.String getGpoContainerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kerberosPolicyInput`<sup>Optional</sup> <a name="kerberosPolicyInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput"></a>

```java
public GpoSecurityKerberosPolicy getKerberosPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `passwordPoliciesInput`<sup>Optional</sup> <a name="passwordPoliciesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput"></a>

```java
public GpoSecurityPasswordPolicies getPasswordPoliciesInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `registryKeysInput`<sup>Optional</sup> <a name="registryKeysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput"></a>

```java
public java.lang.Object getRegistryKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>>

---

##### `registryValuesInput`<sup>Optional</sup> <a name="registryValuesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput"></a>

```java
public java.lang.Object getRegistryValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>>

---

##### `restrictedGroupsInput`<sup>Optional</sup> <a name="restrictedGroupsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput"></a>

```java
public java.lang.Object getRestrictedGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>>

---

##### `systemLogInput`<sup>Optional</sup> <a name="systemLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput"></a>

```java
public GpoSecuritySystemLog getSystemLogInput();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `systemServicesInput`<sup>Optional</sup> <a name="systemServicesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput"></a>

```java
public java.lang.Object getSystemServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>>

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer"></a>

```java
public java.lang.String getGpoContainer();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GpoSecurityAccountLockout <a name="GpoSecurityAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityAccountLockout;

GpoSecurityAccountLockout.builder()
//  .forceLogoffWhenHourExpire(java.lang.String)
//  .lockoutBadCount(java.lang.String)
//  .lockoutDuration(java.lang.String)
//  .resetLockoutCount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire">forceLogoffWhenHourExpire</a></code> | <code>java.lang.String</code> | Disconnect SMB sessions when logon hours expire. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount">lockoutBadCount</a></code> | <code>java.lang.String</code> | Number of failed logon attempts until a account is locked. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration">lockoutDuration</a></code> | <code>java.lang.String</code> | Number of minutes a locked out account must remain locked out. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount">resetLockoutCount</a></code> | <code>java.lang.String</code> | Number of minutes a account will remain locked after a failed logon attempt. |

---

##### `forceLogoffWhenHourExpire`<sup>Optional</sup> <a name="forceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire"></a>

```java
public java.lang.String getForceLogoffWhenHourExpire();
```

- *Type:* java.lang.String

Disconnect SMB sessions when logon hours expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#force_logoff_when_hour_expire GpoSecurity#force_logoff_when_hour_expire}

---

##### `lockoutBadCount`<sup>Optional</sup> <a name="lockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount"></a>

```java
public java.lang.String getLockoutBadCount();
```

- *Type:* java.lang.String

Number of failed logon attempts until a account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_bad_count GpoSecurity#lockout_bad_count}

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration"></a>

```java
public java.lang.String getLockoutDuration();
```

- *Type:* java.lang.String

Number of minutes a locked out account must remain locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_duration GpoSecurity#lockout_duration}

---

##### `resetLockoutCount`<sup>Optional</sup> <a name="resetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount"></a>

```java
public java.lang.String getResetLockoutCount();
```

- *Type:* java.lang.String

Number of minutes a account will remain locked after a failed logon attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#reset_lockout_count GpoSecurity#reset_lockout_count}

---

### GpoSecurityApplicationLog <a name="GpoSecurityApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityApplicationLog;

GpoSecurityApplicationLog.builder()
//  .auditLogRetentionPeriod(java.lang.String)
//  .maximumLogSize(java.lang.String)
//  .restrictGuestAccess(java.lang.String)
//  .retentionDays(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>java.lang.String</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize">maximumLogSize</a></code> | <code>java.lang.String</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>java.lang.String</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays">retentionDays</a></code> | <code>java.lang.String</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod"></a>

```java
public java.lang.String getAuditLogRetentionPeriod();
```

- *Type:* java.lang.String

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize"></a>

```java
public java.lang.String getMaximumLogSize();
```

- *Type:* java.lang.String

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess"></a>

```java
public java.lang.String getRestrictGuestAccess();
```

- *Type:* java.lang.String

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays"></a>

```java
public java.lang.String getRetentionDays();
```

- *Type:* java.lang.String

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityAuditLog <a name="GpoSecurityAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityAuditLog;

GpoSecurityAuditLog.builder()
//  .auditLogRetentionPeriod(java.lang.String)
//  .maximumLogSize(java.lang.String)
//  .restrictGuestAccess(java.lang.String)
//  .retentionDays(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>java.lang.String</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize">maximumLogSize</a></code> | <code>java.lang.String</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>java.lang.String</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays">retentionDays</a></code> | <code>java.lang.String</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod"></a>

```java
public java.lang.String getAuditLogRetentionPeriod();
```

- *Type:* java.lang.String

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize"></a>

```java
public java.lang.String getMaximumLogSize();
```

- *Type:* java.lang.String

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess"></a>

```java
public java.lang.String getRestrictGuestAccess();
```

- *Type:* java.lang.String

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays"></a>

```java
public java.lang.String getRetentionDays();
```

- *Type:* java.lang.String

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityConfig <a name="GpoSecurityConfig" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityConfig;

GpoSecurityConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .gpoContainer(java.lang.String)
//  .accountLockout(GpoSecurityAccountLockout)
//  .applicationLog(GpoSecurityApplicationLog)
//  .auditLog(GpoSecurityAuditLog)
//  .eventAudit(GpoSecurityEventAudit)
//  .filesystem(IResolvable)
//  .filesystem(java.util.List<GpoSecurityFilesystem>)
//  .id(java.lang.String)
//  .kerberosPolicy(GpoSecurityKerberosPolicy)
//  .passwordPolicies(GpoSecurityPasswordPolicies)
//  .registryKeys(IResolvable)
//  .registryKeys(java.util.List<GpoSecurityRegistryKeys>)
//  .registryValues(IResolvable)
//  .registryValues(java.util.List<GpoSecurityRegistryValues>)
//  .restrictedGroups(IResolvable)
//  .restrictedGroups(java.util.List<GpoSecurityRestrictedGroups>)
//  .systemLog(GpoSecuritySystemLog)
//  .systemServices(IResolvable)
//  .systemServices(java.util.List<GpoSecuritySystemServices>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer">gpoContainer</a></code> | <code>java.lang.String</code> | The GUID of the container the security settings belong to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout">accountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | account_lockout block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog">applicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | application_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog">auditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | audit_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit">eventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | event_audit block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem">filesystem</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>></code> | filesystem block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy">kerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | kerberos_policy block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies">passwordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | password_policies block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys">registryKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>></code> | registry_keys block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues">registryValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>></code> | registry_values block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups">restrictedGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>></code> | restricted_groups block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog">systemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | system_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices">systemServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>></code> | system_services block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer"></a>

```java
public java.lang.String getGpoContainer();
```

- *Type:* java.lang.String

The GUID of the container the security settings belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#gpo_container GpoSecurity#gpo_container}

---

##### `accountLockout`<sup>Optional</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout"></a>

```java
public GpoSecurityAccountLockout getAccountLockout();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

account_lockout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#account_lockout GpoSecurity#account_lockout}

---

##### `applicationLog`<sup>Optional</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog"></a>

```java
public GpoSecurityApplicationLog getApplicationLog();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

application_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#application_log GpoSecurity#application_log}

---

##### `auditLog`<sup>Optional</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog"></a>

```java
public GpoSecurityAuditLog getAuditLog();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log GpoSecurity#audit_log}

---

##### `eventAudit`<sup>Optional</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit"></a>

```java
public GpoSecurityEventAudit getEventAudit();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

event_audit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#event_audit GpoSecurity#event_audit}

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem"></a>

```java
public java.lang.Object getFilesystem();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>>

filesystem block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#filesystem GpoSecurity#filesystem}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosPolicy`<sup>Optional</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy"></a>

```java
public GpoSecurityKerberosPolicy getKerberosPolicy();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

kerberos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}

---

##### `passwordPolicies`<sup>Optional</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies"></a>

```java
public GpoSecurityPasswordPolicies getPasswordPolicies();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

password_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_policies GpoSecurity#password_policies}

---

##### `registryKeys`<sup>Optional</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys"></a>

```java
public java.lang.Object getRegistryKeys();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>>

registry_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_keys GpoSecurity#registry_keys}

---

##### `registryValues`<sup>Optional</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues"></a>

```java
public java.lang.Object getRegistryValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>>

registry_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_values GpoSecurity#registry_values}

---

##### `restrictedGroups`<sup>Optional</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups"></a>

```java
public java.lang.Object getRestrictedGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>>

restricted_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restricted_groups GpoSecurity#restricted_groups}

---

##### `systemLog`<sup>Optional</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog"></a>

```java
public GpoSecuritySystemLog getSystemLog();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

system_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_log GpoSecurity#system_log}

---

##### `systemServices`<sup>Optional</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices"></a>

```java
public java.lang.Object getSystemServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>>

system_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_services GpoSecurity#system_services}

---

### GpoSecurityEventAudit <a name="GpoSecurityEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityEventAudit;

GpoSecurityEventAudit.builder()
//  .auditAccountLogon(java.lang.String)
//  .auditAccountManage(java.lang.String)
//  .auditDsAccess(java.lang.String)
//  .auditLogonEvents(java.lang.String)
//  .auditObjectAccess(java.lang.String)
//  .auditPolicyChange(java.lang.String)
//  .auditPrivilegeUse(java.lang.String)
//  .auditProcessTracking(java.lang.String)
//  .auditSystemEvents(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon">auditAccountLogon</a></code> | <code>java.lang.String</code> | Audit credential validation. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage">auditAccountManage</a></code> | <code>java.lang.String</code> | Audit account management events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess">auditDsAccess</a></code> | <code>java.lang.String</code> | Audit access attempts to AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents">auditLogonEvents</a></code> | <code>java.lang.String</code> | Audit logon events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess">auditObjectAccess</a></code> | <code>java.lang.String</code> | Audit access attempts to non-AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange">auditPolicyChange</a></code> | <code>java.lang.String</code> | Audit attempts to change a policy. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse">auditPrivilegeUse</a></code> | <code>java.lang.String</code> | Audit user attempts of exercising user rights. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking">auditProcessTracking</a></code> | <code>java.lang.String</code> | Audit process related events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents">auditSystemEvents</a></code> | <code>java.lang.String</code> | Audit system events. |

---

##### `auditAccountLogon`<sup>Optional</sup> <a name="auditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon"></a>

```java
public java.lang.String getAuditAccountLogon();
```

- *Type:* java.lang.String

Audit credential validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_logon GpoSecurity#audit_account_logon}

---

##### `auditAccountManage`<sup>Optional</sup> <a name="auditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage"></a>

```java
public java.lang.String getAuditAccountManage();
```

- *Type:* java.lang.String

Audit account management events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_manage GpoSecurity#audit_account_manage}

---

##### `auditDsAccess`<sup>Optional</sup> <a name="auditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess"></a>

```java
public java.lang.String getAuditDsAccess();
```

- *Type:* java.lang.String

Audit access attempts to AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_ds_access GpoSecurity#audit_ds_access}

---

##### `auditLogonEvents`<sup>Optional</sup> <a name="auditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents"></a>

```java
public java.lang.String getAuditLogonEvents();
```

- *Type:* java.lang.String

Audit logon events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_logon_events GpoSecurity#audit_logon_events}

---

##### `auditObjectAccess`<sup>Optional</sup> <a name="auditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess"></a>

```java
public java.lang.String getAuditObjectAccess();
```

- *Type:* java.lang.String

Audit access attempts to non-AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_object_access GpoSecurity#audit_object_access}

---

##### `auditPolicyChange`<sup>Optional</sup> <a name="auditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange"></a>

```java
public java.lang.String getAuditPolicyChange();
```

- *Type:* java.lang.String

Audit attempts to change a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_policy_change GpoSecurity#audit_policy_change}

---

##### `auditPrivilegeUse`<sup>Optional</sup> <a name="auditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse"></a>

```java
public java.lang.String getAuditPrivilegeUse();
```

- *Type:* java.lang.String

Audit user attempts of exercising user rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_privilege_use GpoSecurity#audit_privilege_use}

---

##### `auditProcessTracking`<sup>Optional</sup> <a name="auditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking"></a>

```java
public java.lang.String getAuditProcessTracking();
```

- *Type:* java.lang.String

Audit process related events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_process_tracking GpoSecurity#audit_process_tracking}

---

##### `auditSystemEvents`<sup>Optional</sup> <a name="auditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents"></a>

```java
public java.lang.String getAuditSystemEvents();
```

- *Type:* java.lang.String

Audit system events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_system_events GpoSecurity#audit_system_events}

---

### GpoSecurityFilesystem <a name="GpoSecurityFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityFilesystem;

GpoSecurityFilesystem.builder()
    .acl(java.lang.String)
    .path(java.lang.String)
    .propagationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl">acl</a></code> | <code>java.lang.String</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path">path</a></code> | <code>java.lang.String</code> | Path of the file or directory. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode">propagationMode</a></code> | <code>java.lang.String</code> | Control permission propagation. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the file or directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#path GpoSecurity#path}

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode"></a>

```java
public java.lang.String getPropagationMode();
```

- *Type:* java.lang.String

Control permission propagation.

0: Propagate permissions to all subfolders and files, 1: Replace existing permissions on all subfolders and files, 2: Do not allow permissions to be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityKerberosPolicy <a name="GpoSecurityKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityKerberosPolicy;

GpoSecurityKerberosPolicy.builder()
//  .maxClockSkew(java.lang.String)
//  .maxRenewAge(java.lang.String)
//  .maxServiceAge(java.lang.String)
//  .maxTicketAge(java.lang.String)
//  .ticketValidateClient(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.String</code> | Maximum time difference, in minutes, between the client clock and the server clock. (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge">maxRenewAge</a></code> | <code>java.lang.String</code> | Number of days during which a ticket-granting ticket can be renewed (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge">maxServiceAge</a></code> | <code>java.lang.String</code> | Maximum amount of minutes a ticket must be valid to access a service or resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge">maxTicketAge</a></code> | <code>java.lang.String</code> | Maximum amount of hours a ticket-granting ticket is valid (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient">ticketValidateClient</a></code> | <code>java.lang.String</code> | Control if the session ticket is validated for every request. A non-zero value disables the policy. |

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew"></a>

```java
public java.lang.String getMaxClockSkew();
```

- *Type:* java.lang.String

Maximum time difference, in minutes, between the client clock and the server clock. (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_clock_skew GpoSecurity#max_clock_skew}

---

##### `maxRenewAge`<sup>Optional</sup> <a name="maxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge"></a>

```java
public java.lang.String getMaxRenewAge();
```

- *Type:* java.lang.String

Number of days during which a ticket-granting ticket can be renewed (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_renew_age GpoSecurity#max_renew_age}

---

##### `maxServiceAge`<sup>Optional</sup> <a name="maxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge"></a>

```java
public java.lang.String getMaxServiceAge();
```

- *Type:* java.lang.String

Maximum amount of minutes a ticket must be valid to access a service or resource.

Minimum should be 10 and maximum should be equal to `max_ticket_age`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_service_age GpoSecurity#max_service_age}

---

##### `maxTicketAge`<sup>Optional</sup> <a name="maxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge"></a>

```java
public java.lang.String getMaxTicketAge();
```

- *Type:* java.lang.String

Maximum amount of hours a ticket-granting ticket is valid (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_ticket_age GpoSecurity#max_ticket_age}

---

##### `ticketValidateClient`<sup>Optional</sup> <a name="ticketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient"></a>

```java
public java.lang.String getTicketValidateClient();
```

- *Type:* java.lang.String

Control if the session ticket is validated for every request. A non-zero value disables the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#ticket_validate_client GpoSecurity#ticket_validate_client}

---

### GpoSecurityPasswordPolicies <a name="GpoSecurityPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityPasswordPolicies;

GpoSecurityPasswordPolicies.builder()
//  .clearTextPassword(java.lang.String)
//  .maximumPasswordAge(java.lang.String)
//  .minimumPasswordAge(java.lang.String)
//  .minimumPasswordLength(java.lang.String)
//  .passwordComplexity(java.lang.String)
//  .passwordHistorySize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword">clearTextPassword</a></code> | <code>java.lang.String</code> | Store password with reversible encryption (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge">maximumPasswordAge</a></code> | <code>java.lang.String</code> | Number of days before password expires (-1-999). If set to -1, it means the password never expires. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge">minimumPasswordAge</a></code> | <code>java.lang.String</code> | Number of days a password must be used before changing it (0-999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.String</code> | Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity">passwordComplexity</a></code> | <code>java.lang.String</code> | Password must meet complexity requirements (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize">passwordHistorySize</a></code> | <code>java.lang.String</code> | The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16). |

---

##### `clearTextPassword`<sup>Optional</sup> <a name="clearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword"></a>

```java
public java.lang.String getClearTextPassword();
```

- *Type:* java.lang.String

Store password with reversible encryption (0-2^16).

The password will not be stored with reversible encryption if the value is set to 0. Reversible encryption will be used in any other case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#clear_text_password GpoSecurity#clear_text_password}

---

##### `maximumPasswordAge`<sup>Optional</sup> <a name="maximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge"></a>

```java
public java.lang.String getMaximumPasswordAge();
```

- *Type:* java.lang.String

Number of days before password expires (-1-999). If set to -1, it means the password never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_password_age GpoSecurity#maximum_password_age}

---

##### `minimumPasswordAge`<sup>Optional</sup> <a name="minimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge"></a>

```java
public java.lang.String getMinimumPasswordAge();
```

- *Type:* java.lang.String

Number of days a password must be used before changing it (0-999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_age GpoSecurity#minimum_password_age}

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength"></a>

```java
public java.lang.String getMinimumPasswordLength();
```

- *Type:* java.lang.String

Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_length GpoSecurity#minimum_password_length}

---

##### `passwordComplexity`<sup>Optional</sup> <a name="passwordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity"></a>

```java
public java.lang.String getPasswordComplexity();
```

- *Type:* java.lang.String

Password must meet complexity requirements (0-2^16).

If set to 0, then requirements do not apply, any other value means requirements are applied

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_complexity GpoSecurity#password_complexity}

---

##### `passwordHistorySize`<sup>Optional</sup> <a name="passwordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize"></a>

```java
public java.lang.String getPasswordHistorySize();
```

- *Type:* java.lang.String

The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16).

A value of 0 indicates that the password history is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_history_size GpoSecurity#password_history_size}

---

### GpoSecurityRegistryKeys <a name="GpoSecurityRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRegistryKeys;

GpoSecurityRegistryKeys.builder()
    .acl(java.lang.String)
    .keyName(java.lang.String)
    .propagationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl">acl</a></code> | <code>java.lang.String</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode">propagationMode</a></code> | <code>java.lang.String</code> | Control permission propagation. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode"></a>

```java
public java.lang.String getPropagationMode();
```

- *Type:* java.lang.String

Control permission propagation.

0: Propagate permissions to all subkeys, 1: Replace existing permissions on all subkeys, 2: Do not allow permissions to be replaced on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityRegistryValues <a name="GpoSecurityRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRegistryValues;

GpoSecurityRegistryValues.builder()
    .keyName(java.lang.String)
    .value(java.lang.String)
    .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value">value</a></code> | <code>java.lang.String</code> | The value of the key, matching the type set in `value_type`. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the key, matching the type set in `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value GpoSecurity#value}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value_type GpoSecurity#value_type}

---

### GpoSecurityRestrictedGroups <a name="GpoSecurityRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRestrictedGroups;

GpoSecurityRestrictedGroups.builder()
    .groupMemberof(java.lang.String)
    .groupMembers(java.lang.String)
    .groupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof">groupMemberof</a></code> | <code>java.lang.String</code> | Comma separated list of group names or SIDs that this group belongs to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers">groupMembers</a></code> | <code>java.lang.String</code> | Comma separated list of group names or SIDs that are members of the group. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Name of the group we are managing. |

---

##### `groupMemberof`<sup>Required</sup> <a name="groupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof"></a>

```java
public java.lang.String getGroupMemberof();
```

- *Type:* java.lang.String

Comma separated list of group names or SIDs that this group belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_memberof GpoSecurity#group_memberof}

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers"></a>

```java
public java.lang.String getGroupMembers();
```

- *Type:* java.lang.String

Comma separated list of group names or SIDs that are members of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_members GpoSecurity#group_members}

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Name of the group we are managing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_name GpoSecurity#group_name}

---

### GpoSecuritySystemLog <a name="GpoSecuritySystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecuritySystemLog;

GpoSecuritySystemLog.builder()
//  .auditLogRetentionPeriod(java.lang.String)
//  .maximumLogSize(java.lang.String)
//  .restrictGuestAccess(java.lang.String)
//  .retentionDays(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>java.lang.String</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize">maximumLogSize</a></code> | <code>java.lang.String</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>java.lang.String</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays">retentionDays</a></code> | <code>java.lang.String</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod"></a>

```java
public java.lang.String getAuditLogRetentionPeriod();
```

- *Type:* java.lang.String

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize"></a>

```java
public java.lang.String getMaximumLogSize();
```

- *Type:* java.lang.String

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess"></a>

```java
public java.lang.String getRestrictGuestAccess();
```

- *Type:* java.lang.String

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays"></a>

```java
public java.lang.String getRetentionDays();
```

- *Type:* java.lang.String

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecuritySystemServices <a name="GpoSecuritySystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecuritySystemServices;

GpoSecuritySystemServices.builder()
    .acl(java.lang.String)
    .serviceName(java.lang.String)
    .startupMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl">acl</a></code> | <code>java.lang.String</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode">startupMode</a></code> | <code>java.lang.String</code> | Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#service_name GpoSecurity#service_name}

---

##### `startupMode`<sup>Required</sup> <a name="startupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode"></a>

```java
public java.lang.String getStartupMode();
```

- *Type:* java.lang.String

Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#startup_mode GpoSecurity#startup_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### GpoSecurityAccountLockoutOutputReference <a name="GpoSecurityAccountLockoutOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityAccountLockoutOutputReference;

new GpoSecurityAccountLockoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire">resetForceLogoffWhenHourExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount">resetLockoutBadCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration">resetLockoutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount">resetResetLockoutCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceLogoffWhenHourExpire` <a name="resetForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire"></a>

```java
public void resetForceLogoffWhenHourExpire()
```

##### `resetLockoutBadCount` <a name="resetLockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount"></a>

```java
public void resetLockoutBadCount()
```

##### `resetLockoutDuration` <a name="resetLockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration"></a>

```java
public void resetLockoutDuration()
```

##### `resetResetLockoutCount` <a name="resetResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount"></a>

```java
public void resetResetLockoutCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput">forceLogoffWhenHourExpireInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput">lockoutBadCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput">lockoutDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput">resetLockoutCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire">forceLogoffWhenHourExpire</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount">lockoutBadCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration">lockoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount">resetLockoutCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forceLogoffWhenHourExpireInput`<sup>Optional</sup> <a name="forceLogoffWhenHourExpireInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput"></a>

```java
public java.lang.String getForceLogoffWhenHourExpireInput();
```

- *Type:* java.lang.String

---

##### `lockoutBadCountInput`<sup>Optional</sup> <a name="lockoutBadCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput"></a>

```java
public java.lang.String getLockoutBadCountInput();
```

- *Type:* java.lang.String

---

##### `lockoutDurationInput`<sup>Optional</sup> <a name="lockoutDurationInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput"></a>

```java
public java.lang.String getLockoutDurationInput();
```

- *Type:* java.lang.String

---

##### `resetLockoutCountInput`<sup>Optional</sup> <a name="resetLockoutCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput"></a>

```java
public java.lang.String getResetLockoutCountInput();
```

- *Type:* java.lang.String

---

##### `forceLogoffWhenHourExpire`<sup>Required</sup> <a name="forceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire"></a>

```java
public java.lang.String getForceLogoffWhenHourExpire();
```

- *Type:* java.lang.String

---

##### `lockoutBadCount`<sup>Required</sup> <a name="lockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount"></a>

```java
public java.lang.String getLockoutBadCount();
```

- *Type:* java.lang.String

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration"></a>

```java
public java.lang.String getLockoutDuration();
```

- *Type:* java.lang.String

---

##### `resetLockoutCount`<sup>Required</sup> <a name="resetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount"></a>

```java
public java.lang.String getResetLockoutCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue"></a>

```java
public GpoSecurityAccountLockout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---


### GpoSecurityApplicationLogOutputReference <a name="GpoSecurityApplicationLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityApplicationLogOutputReference;

new GpoSecurityApplicationLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod">resetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize">resetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess">resetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod"></a>

```java
public void resetAuditLogRetentionPeriod()
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize"></a>

```java
public void resetMaximumLogSize()
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess"></a>

```java
public void resetRestrictGuestAccess()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```java
public java.lang.String getAuditLogRetentionPeriodInput();
```

- *Type:* java.lang.String

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput"></a>

```java
public java.lang.String getMaximumLogSizeInput();
```

- *Type:* java.lang.String

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput"></a>

```java
public java.lang.String getRestrictGuestAccessInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.String getRetentionDaysInput();
```

- *Type:* java.lang.String

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod"></a>

```java
public java.lang.String getAuditLogRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize"></a>

```java
public java.lang.String getMaximumLogSize();
```

- *Type:* java.lang.String

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess"></a>

```java
public java.lang.String getRestrictGuestAccess();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays"></a>

```java
public java.lang.String getRetentionDays();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue"></a>

```java
public GpoSecurityApplicationLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---


### GpoSecurityAuditLogOutputReference <a name="GpoSecurityAuditLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityAuditLogOutputReference;

new GpoSecurityAuditLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod">resetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize">resetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess">resetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod"></a>

```java
public void resetAuditLogRetentionPeriod()
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize"></a>

```java
public void resetMaximumLogSize()
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess"></a>

```java
public void resetRestrictGuestAccess()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```java
public java.lang.String getAuditLogRetentionPeriodInput();
```

- *Type:* java.lang.String

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput"></a>

```java
public java.lang.String getMaximumLogSizeInput();
```

- *Type:* java.lang.String

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput"></a>

```java
public java.lang.String getRestrictGuestAccessInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.String getRetentionDaysInput();
```

- *Type:* java.lang.String

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod"></a>

```java
public java.lang.String getAuditLogRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize"></a>

```java
public java.lang.String getMaximumLogSize();
```

- *Type:* java.lang.String

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess"></a>

```java
public java.lang.String getRestrictGuestAccess();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays"></a>

```java
public java.lang.String getRetentionDays();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue"></a>

```java
public GpoSecurityAuditLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---


### GpoSecurityEventAuditOutputReference <a name="GpoSecurityEventAuditOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityEventAuditOutputReference;

new GpoSecurityEventAuditOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon">resetAuditAccountLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage">resetAuditAccountManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess">resetAuditDsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents">resetAuditLogonEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess">resetAuditObjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange">resetAuditPolicyChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse">resetAuditPrivilegeUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking">resetAuditProcessTracking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents">resetAuditSystemEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditAccountLogon` <a name="resetAuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon"></a>

```java
public void resetAuditAccountLogon()
```

##### `resetAuditAccountManage` <a name="resetAuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage"></a>

```java
public void resetAuditAccountManage()
```

##### `resetAuditDsAccess` <a name="resetAuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess"></a>

```java
public void resetAuditDsAccess()
```

##### `resetAuditLogonEvents` <a name="resetAuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents"></a>

```java
public void resetAuditLogonEvents()
```

##### `resetAuditObjectAccess` <a name="resetAuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess"></a>

```java
public void resetAuditObjectAccess()
```

##### `resetAuditPolicyChange` <a name="resetAuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange"></a>

```java
public void resetAuditPolicyChange()
```

##### `resetAuditPrivilegeUse` <a name="resetAuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse"></a>

```java
public void resetAuditPrivilegeUse()
```

##### `resetAuditProcessTracking` <a name="resetAuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking"></a>

```java
public void resetAuditProcessTracking()
```

##### `resetAuditSystemEvents` <a name="resetAuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents"></a>

```java
public void resetAuditSystemEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput">auditAccountLogonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput">auditAccountManageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput">auditDsAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput">auditLogonEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput">auditObjectAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput">auditPolicyChangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput">auditPrivilegeUseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput">auditProcessTrackingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput">auditSystemEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon">auditAccountLogon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage">auditAccountManage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess">auditDsAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents">auditLogonEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess">auditObjectAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange">auditPolicyChange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse">auditPrivilegeUse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking">auditProcessTracking</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents">auditSystemEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditAccountLogonInput`<sup>Optional</sup> <a name="auditAccountLogonInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput"></a>

```java
public java.lang.String getAuditAccountLogonInput();
```

- *Type:* java.lang.String

---

##### `auditAccountManageInput`<sup>Optional</sup> <a name="auditAccountManageInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput"></a>

```java
public java.lang.String getAuditAccountManageInput();
```

- *Type:* java.lang.String

---

##### `auditDsAccessInput`<sup>Optional</sup> <a name="auditDsAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput"></a>

```java
public java.lang.String getAuditDsAccessInput();
```

- *Type:* java.lang.String

---

##### `auditLogonEventsInput`<sup>Optional</sup> <a name="auditLogonEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput"></a>

```java
public java.lang.String getAuditLogonEventsInput();
```

- *Type:* java.lang.String

---

##### `auditObjectAccessInput`<sup>Optional</sup> <a name="auditObjectAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput"></a>

```java
public java.lang.String getAuditObjectAccessInput();
```

- *Type:* java.lang.String

---

##### `auditPolicyChangeInput`<sup>Optional</sup> <a name="auditPolicyChangeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput"></a>

```java
public java.lang.String getAuditPolicyChangeInput();
```

- *Type:* java.lang.String

---

##### `auditPrivilegeUseInput`<sup>Optional</sup> <a name="auditPrivilegeUseInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput"></a>

```java
public java.lang.String getAuditPrivilegeUseInput();
```

- *Type:* java.lang.String

---

##### `auditProcessTrackingInput`<sup>Optional</sup> <a name="auditProcessTrackingInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput"></a>

```java
public java.lang.String getAuditProcessTrackingInput();
```

- *Type:* java.lang.String

---

##### `auditSystemEventsInput`<sup>Optional</sup> <a name="auditSystemEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput"></a>

```java
public java.lang.String getAuditSystemEventsInput();
```

- *Type:* java.lang.String

---

##### `auditAccountLogon`<sup>Required</sup> <a name="auditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon"></a>

```java
public java.lang.String getAuditAccountLogon();
```

- *Type:* java.lang.String

---

##### `auditAccountManage`<sup>Required</sup> <a name="auditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage"></a>

```java
public java.lang.String getAuditAccountManage();
```

- *Type:* java.lang.String

---

##### `auditDsAccess`<sup>Required</sup> <a name="auditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess"></a>

```java
public java.lang.String getAuditDsAccess();
```

- *Type:* java.lang.String

---

##### `auditLogonEvents`<sup>Required</sup> <a name="auditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents"></a>

```java
public java.lang.String getAuditLogonEvents();
```

- *Type:* java.lang.String

---

##### `auditObjectAccess`<sup>Required</sup> <a name="auditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess"></a>

```java
public java.lang.String getAuditObjectAccess();
```

- *Type:* java.lang.String

---

##### `auditPolicyChange`<sup>Required</sup> <a name="auditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange"></a>

```java
public java.lang.String getAuditPolicyChange();
```

- *Type:* java.lang.String

---

##### `auditPrivilegeUse`<sup>Required</sup> <a name="auditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse"></a>

```java
public java.lang.String getAuditPrivilegeUse();
```

- *Type:* java.lang.String

---

##### `auditProcessTracking`<sup>Required</sup> <a name="auditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking"></a>

```java
public java.lang.String getAuditProcessTracking();
```

- *Type:* java.lang.String

---

##### `auditSystemEvents`<sup>Required</sup> <a name="auditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents"></a>

```java
public java.lang.String getAuditSystemEvents();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue"></a>

```java
public GpoSecurityEventAudit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---


### GpoSecurityFilesystemList <a name="GpoSecurityFilesystemList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityFilesystemList;

new GpoSecurityFilesystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get"></a>

```java
public GpoSecurityFilesystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>>

---


### GpoSecurityFilesystemOutputReference <a name="GpoSecurityFilesystemOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityFilesystemOutputReference;

new GpoSecurityFilesystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput">propagationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode">propagationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `propagationModeInput`<sup>Optional</sup> <a name="propagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput"></a>

```java
public java.lang.String getPropagationModeInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode"></a>

```java
public java.lang.String getPropagationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>

---


### GpoSecurityKerberosPolicyOutputReference <a name="GpoSecurityKerberosPolicyOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityKerberosPolicyOutputReference;

new GpoSecurityKerberosPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge">resetMaxRenewAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge">resetMaxServiceAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge">resetMaxTicketAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient">resetTicketValidateClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew"></a>

```java
public void resetMaxClockSkew()
```

##### `resetMaxRenewAge` <a name="resetMaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge"></a>

```java
public void resetMaxRenewAge()
```

##### `resetMaxServiceAge` <a name="resetMaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge"></a>

```java
public void resetMaxServiceAge()
```

##### `resetMaxTicketAge` <a name="resetMaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge"></a>

```java
public void resetMaxTicketAge()
```

##### `resetTicketValidateClient` <a name="resetTicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient"></a>

```java
public void resetTicketValidateClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput">maxRenewAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput">maxServiceAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput">maxTicketAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput">ticketValidateClientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge">maxRenewAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge">maxServiceAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge">maxTicketAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient">ticketValidateClient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput"></a>

```java
public java.lang.String getMaxClockSkewInput();
```

- *Type:* java.lang.String

---

##### `maxRenewAgeInput`<sup>Optional</sup> <a name="maxRenewAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput"></a>

```java
public java.lang.String getMaxRenewAgeInput();
```

- *Type:* java.lang.String

---

##### `maxServiceAgeInput`<sup>Optional</sup> <a name="maxServiceAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput"></a>

```java
public java.lang.String getMaxServiceAgeInput();
```

- *Type:* java.lang.String

---

##### `maxTicketAgeInput`<sup>Optional</sup> <a name="maxTicketAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput"></a>

```java
public java.lang.String getMaxTicketAgeInput();
```

- *Type:* java.lang.String

---

##### `ticketValidateClientInput`<sup>Optional</sup> <a name="ticketValidateClientInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput"></a>

```java
public java.lang.String getTicketValidateClientInput();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew"></a>

```java
public java.lang.String getMaxClockSkew();
```

- *Type:* java.lang.String

---

##### `maxRenewAge`<sup>Required</sup> <a name="maxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge"></a>

```java
public java.lang.String getMaxRenewAge();
```

- *Type:* java.lang.String

---

##### `maxServiceAge`<sup>Required</sup> <a name="maxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge"></a>

```java
public java.lang.String getMaxServiceAge();
```

- *Type:* java.lang.String

---

##### `maxTicketAge`<sup>Required</sup> <a name="maxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge"></a>

```java
public java.lang.String getMaxTicketAge();
```

- *Type:* java.lang.String

---

##### `ticketValidateClient`<sup>Required</sup> <a name="ticketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient"></a>

```java
public java.lang.String getTicketValidateClient();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue"></a>

```java
public GpoSecurityKerberosPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---


### GpoSecurityPasswordPoliciesOutputReference <a name="GpoSecurityPasswordPoliciesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityPasswordPoliciesOutputReference;

new GpoSecurityPasswordPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword">resetClearTextPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge">resetMaximumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge">resetMinimumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength">resetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity">resetPasswordComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize">resetPasswordHistorySize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClearTextPassword` <a name="resetClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword"></a>

```java
public void resetClearTextPassword()
```

##### `resetMaximumPasswordAge` <a name="resetMaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge"></a>

```java
public void resetMaximumPasswordAge()
```

##### `resetMinimumPasswordAge` <a name="resetMinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge"></a>

```java
public void resetMinimumPasswordAge()
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength"></a>

```java
public void resetMinimumPasswordLength()
```

##### `resetPasswordComplexity` <a name="resetPasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity"></a>

```java
public void resetPasswordComplexity()
```

##### `resetPasswordHistorySize` <a name="resetPasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize"></a>

```java
public void resetPasswordHistorySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput">clearTextPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput">maximumPasswordAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput">minimumPasswordAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput">passwordComplexityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput">passwordHistorySizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword">clearTextPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge">maximumPasswordAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge">minimumPasswordAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity">passwordComplexity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize">passwordHistorySize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clearTextPasswordInput`<sup>Optional</sup> <a name="clearTextPasswordInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput"></a>

```java
public java.lang.String getClearTextPasswordInput();
```

- *Type:* java.lang.String

---

##### `maximumPasswordAgeInput`<sup>Optional</sup> <a name="maximumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput"></a>

```java
public java.lang.String getMaximumPasswordAgeInput();
```

- *Type:* java.lang.String

---

##### `minimumPasswordAgeInput`<sup>Optional</sup> <a name="minimumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput"></a>

```java
public java.lang.String getMinimumPasswordAgeInput();
```

- *Type:* java.lang.String

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput"></a>

```java
public java.lang.String getMinimumPasswordLengthInput();
```

- *Type:* java.lang.String

---

##### `passwordComplexityInput`<sup>Optional</sup> <a name="passwordComplexityInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput"></a>

```java
public java.lang.String getPasswordComplexityInput();
```

- *Type:* java.lang.String

---

##### `passwordHistorySizeInput`<sup>Optional</sup> <a name="passwordHistorySizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput"></a>

```java
public java.lang.String getPasswordHistorySizeInput();
```

- *Type:* java.lang.String

---

##### `clearTextPassword`<sup>Required</sup> <a name="clearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword"></a>

```java
public java.lang.String getClearTextPassword();
```

- *Type:* java.lang.String

---

##### `maximumPasswordAge`<sup>Required</sup> <a name="maximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge"></a>

```java
public java.lang.String getMaximumPasswordAge();
```

- *Type:* java.lang.String

---

##### `minimumPasswordAge`<sup>Required</sup> <a name="minimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge"></a>

```java
public java.lang.String getMinimumPasswordAge();
```

- *Type:* java.lang.String

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength"></a>

```java
public java.lang.String getMinimumPasswordLength();
```

- *Type:* java.lang.String

---

##### `passwordComplexity`<sup>Required</sup> <a name="passwordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity"></a>

```java
public java.lang.String getPasswordComplexity();
```

- *Type:* java.lang.String

---

##### `passwordHistorySize`<sup>Required</sup> <a name="passwordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize"></a>

```java
public java.lang.String getPasswordHistorySize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue"></a>

```java
public GpoSecurityPasswordPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---


### GpoSecurityRegistryKeysList <a name="GpoSecurityRegistryKeysList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRegistryKeysList;

new GpoSecurityRegistryKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get"></a>

```java
public GpoSecurityRegistryKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>>

---


### GpoSecurityRegistryKeysOutputReference <a name="GpoSecurityRegistryKeysOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRegistryKeysOutputReference;

new GpoSecurityRegistryKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput">propagationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode">propagationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `propagationModeInput`<sup>Optional</sup> <a name="propagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput"></a>

```java
public java.lang.String getPropagationModeInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode"></a>

```java
public java.lang.String getPropagationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>

---


### GpoSecurityRegistryValuesList <a name="GpoSecurityRegistryValuesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRegistryValuesList;

new GpoSecurityRegistryValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get"></a>

```java
public GpoSecurityRegistryValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>>

---


### GpoSecurityRegistryValuesOutputReference <a name="GpoSecurityRegistryValuesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRegistryValuesOutputReference;

new GpoSecurityRegistryValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>

---


### GpoSecurityRestrictedGroupsList <a name="GpoSecurityRestrictedGroupsList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRestrictedGroupsList;

new GpoSecurityRestrictedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get"></a>

```java
public GpoSecurityRestrictedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>>

---


### GpoSecurityRestrictedGroupsOutputReference <a name="GpoSecurityRestrictedGroupsOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecurityRestrictedGroupsOutputReference;

new GpoSecurityRestrictedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput">groupMemberofInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput">groupMembersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof">groupMemberof</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers">groupMembers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupMemberofInput`<sup>Optional</sup> <a name="groupMemberofInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput"></a>

```java
public java.lang.String getGroupMemberofInput();
```

- *Type:* java.lang.String

---

##### `groupMembersInput`<sup>Optional</sup> <a name="groupMembersInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput"></a>

```java
public java.lang.String getGroupMembersInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `groupMemberof`<sup>Required</sup> <a name="groupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof"></a>

```java
public java.lang.String getGroupMemberof();
```

- *Type:* java.lang.String

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers"></a>

```java
public java.lang.String getGroupMembers();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>

---


### GpoSecuritySystemLogOutputReference <a name="GpoSecuritySystemLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecuritySystemLogOutputReference;

new GpoSecuritySystemLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod">resetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize">resetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess">resetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod"></a>

```java
public void resetAuditLogRetentionPeriod()
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize"></a>

```java
public void resetMaximumLogSize()
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess"></a>

```java
public void resetRestrictGuestAccess()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```java
public java.lang.String getAuditLogRetentionPeriodInput();
```

- *Type:* java.lang.String

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput"></a>

```java
public java.lang.String getMaximumLogSizeInput();
```

- *Type:* java.lang.String

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput"></a>

```java
public java.lang.String getRestrictGuestAccessInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.String getRetentionDaysInput();
```

- *Type:* java.lang.String

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod"></a>

```java
public java.lang.String getAuditLogRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize"></a>

```java
public java.lang.String getMaximumLogSize();
```

- *Type:* java.lang.String

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess"></a>

```java
public java.lang.String getRestrictGuestAccess();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays"></a>

```java
public java.lang.String getRetentionDays();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue"></a>

```java
public GpoSecuritySystemLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---


### GpoSecuritySystemServicesList <a name="GpoSecuritySystemServicesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecuritySystemServicesList;

new GpoSecuritySystemServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get"></a>

```java
public GpoSecuritySystemServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>>

---


### GpoSecuritySystemServicesOutputReference <a name="GpoSecuritySystemServicesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.gpo_security.GpoSecuritySystemServicesOutputReference;

new GpoSecuritySystemServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput">startupModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode">startupMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `startupModeInput`<sup>Optional</sup> <a name="startupModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput"></a>

```java
public java.lang.String getStartupModeInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `startupMode`<sup>Required</sup> <a name="startupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode"></a>

```java
public java.lang.String getStartupMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>

---



