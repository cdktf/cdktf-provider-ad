# `gpoSecurity` Submodule <a name="`gpoSecurity` Submodule" id="@cdktf/provider-ad.gpoSecurity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GpoSecurity <a name="GpoSecurity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security ad_gpo_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurity(scope Construct, id *string, config GpoSecurityConfig) GpoSecurity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig">GpoSecurityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig">GpoSecurityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout">PutAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog">PutApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog">PutAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit">PutEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem">PutFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy">PutKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies">PutPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys">PutRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues">PutRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups">PutRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog">PutSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices">PutSystemServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout">ResetAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog">ResetApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog">ResetAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit">ResetEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem">ResetFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy">ResetKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies">ResetPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys">ResetRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues">ResetRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups">ResetRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog">ResetSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices">ResetSystemServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAccountLockout` <a name="PutAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout"></a>

```go
func PutAccountLockout(value GpoSecurityAccountLockout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `PutApplicationLog` <a name="PutApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog"></a>

```go
func PutApplicationLog(value GpoSecurityApplicationLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `PutAuditLog` <a name="PutAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog"></a>

```go
func PutAuditLog(value GpoSecurityAuditLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `PutEventAudit` <a name="PutEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit"></a>

```go
func PutEventAudit(value GpoSecurityEventAudit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `PutFilesystem` <a name="PutFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem"></a>

```go
func PutFilesystem(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKerberosPolicy` <a name="PutKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy"></a>

```go
func PutKerberosPolicy(value GpoSecurityKerberosPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `PutPasswordPolicies` <a name="PutPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies"></a>

```go
func PutPasswordPolicies(value GpoSecurityPasswordPolicies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `PutRegistryKeys` <a name="PutRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys"></a>

```go
func PutRegistryKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegistryValues` <a name="PutRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues"></a>

```go
func PutRegistryValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRestrictedGroups` <a name="PutRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups"></a>

```go
func PutRestrictedGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSystemLog` <a name="PutSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog"></a>

```go
func PutSystemLog(value GpoSecuritySystemLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `PutSystemServices` <a name="PutSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices"></a>

```go
func PutSystemServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountLockout` <a name="ResetAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout"></a>

```go
func ResetAccountLockout()
```

##### `ResetApplicationLog` <a name="ResetApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog"></a>

```go
func ResetApplicationLog()
```

##### `ResetAuditLog` <a name="ResetAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog"></a>

```go
func ResetAuditLog()
```

##### `ResetEventAudit` <a name="ResetEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit"></a>

```go
func ResetEventAudit()
```

##### `ResetFilesystem` <a name="ResetFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem"></a>

```go
func ResetFilesystem()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId"></a>

```go
func ResetId()
```

##### `ResetKerberosPolicy` <a name="ResetKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy"></a>

```go
func ResetKerberosPolicy()
```

##### `ResetPasswordPolicies` <a name="ResetPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies"></a>

```go
func ResetPasswordPolicies()
```

##### `ResetRegistryKeys` <a name="ResetRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys"></a>

```go
func ResetRegistryKeys()
```

##### `ResetRegistryValues` <a name="ResetRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues"></a>

```go
func ResetRegistryValues()
```

##### `ResetRestrictedGroups` <a name="ResetRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups"></a>

```go
func ResetRestrictedGroups()
```

##### `ResetSystemLog` <a name="ResetSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog"></a>

```go
func ResetSystemLog()
```

##### `ResetSystemServices` <a name="ResetSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices"></a>

```go
func ResetSystemServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.GpoSecurity_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.GpoSecurity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.GpoSecurity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.GpoSecurity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GpoSecurity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GpoSecurity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GpoSecurity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout">AccountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog">ApplicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog">AuditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit">EventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem">Filesystem</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy">KerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies">PasswordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys">RegistryKeys</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues">RegistryValues</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups">RestrictedGroups</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog">SystemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices">SystemServices</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput">AccountLockoutInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput">ApplicationLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput">AuditLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput">EventAuditInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput">FilesystemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput">GpoContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput">KerberosPolicyInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput">PasswordPoliciesInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput">RegistryKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput">RegistryValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput">RestrictedGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput">SystemLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput">SystemServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer">GpoContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountLockout`<sup>Required</sup> <a name="AccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout"></a>

```go
func AccountLockout() GpoSecurityAccountLockoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a>

---

##### `ApplicationLog`<sup>Required</sup> <a name="ApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog"></a>

```go
func ApplicationLog() GpoSecurityApplicationLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a>

---

##### `AuditLog`<sup>Required</sup> <a name="AuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog"></a>

```go
func AuditLog() GpoSecurityAuditLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a>

---

##### `EventAudit`<sup>Required</sup> <a name="EventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit"></a>

```go
func EventAudit() GpoSecurityEventAuditOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a>

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem"></a>

```go
func Filesystem() GpoSecurityFilesystemList
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a>

---

##### `KerberosPolicy`<sup>Required</sup> <a name="KerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy"></a>

```go
func KerberosPolicy() GpoSecurityKerberosPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a>

---

##### `PasswordPolicies`<sup>Required</sup> <a name="PasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies"></a>

```go
func PasswordPolicies() GpoSecurityPasswordPoliciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a>

---

##### `RegistryKeys`<sup>Required</sup> <a name="RegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys"></a>

```go
func RegistryKeys() GpoSecurityRegistryKeysList
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a>

---

##### `RegistryValues`<sup>Required</sup> <a name="RegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues"></a>

```go
func RegistryValues() GpoSecurityRegistryValuesList
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a>

---

##### `RestrictedGroups`<sup>Required</sup> <a name="RestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups"></a>

```go
func RestrictedGroups() GpoSecurityRestrictedGroupsList
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a>

---

##### `SystemLog`<sup>Required</sup> <a name="SystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog"></a>

```go
func SystemLog() GpoSecuritySystemLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a>

---

##### `SystemServices`<sup>Required</sup> <a name="SystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices"></a>

```go
func SystemServices() GpoSecuritySystemServicesList
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a>

---

##### `AccountLockoutInput`<sup>Optional</sup> <a name="AccountLockoutInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput"></a>

```go
func AccountLockoutInput() GpoSecurityAccountLockout
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `ApplicationLogInput`<sup>Optional</sup> <a name="ApplicationLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput"></a>

```go
func ApplicationLogInput() GpoSecurityApplicationLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `AuditLogInput`<sup>Optional</sup> <a name="AuditLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput"></a>

```go
func AuditLogInput() GpoSecurityAuditLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `EventAuditInput`<sup>Optional</sup> <a name="EventAuditInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput"></a>

```go
func EventAuditInput() GpoSecurityEventAudit
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput"></a>

```go
func FilesystemInput() interface{}
```

- *Type:* interface{}

---

##### `GpoContainerInput`<sup>Optional</sup> <a name="GpoContainerInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput"></a>

```go
func GpoContainerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KerberosPolicyInput`<sup>Optional</sup> <a name="KerberosPolicyInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput"></a>

```go
func KerberosPolicyInput() GpoSecurityKerberosPolicy
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `PasswordPoliciesInput`<sup>Optional</sup> <a name="PasswordPoliciesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput"></a>

```go
func PasswordPoliciesInput() GpoSecurityPasswordPolicies
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `RegistryKeysInput`<sup>Optional</sup> <a name="RegistryKeysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput"></a>

```go
func RegistryKeysInput() interface{}
```

- *Type:* interface{}

---

##### `RegistryValuesInput`<sup>Optional</sup> <a name="RegistryValuesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput"></a>

```go
func RegistryValuesInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictedGroupsInput`<sup>Optional</sup> <a name="RestrictedGroupsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput"></a>

```go
func RestrictedGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SystemLogInput`<sup>Optional</sup> <a name="SystemLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput"></a>

```go
func SystemLogInput() GpoSecuritySystemLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `SystemServicesInput`<sup>Optional</sup> <a name="SystemServicesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput"></a>

```go
func SystemServicesInput() interface{}
```

- *Type:* interface{}

---

##### `GpoContainer`<sup>Required</sup> <a name="GpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer"></a>

```go
func GpoContainer() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GpoSecurityAccountLockout <a name="GpoSecurityAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityAccountLockout {
	ForceLogoffWhenHourExpire: *string,
	LockoutBadCount: *string,
	LockoutDuration: *string,
	ResetLockoutCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire">ForceLogoffWhenHourExpire</a></code> | <code>*string</code> | Disconnect SMB sessions when logon hours expire. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount">LockoutBadCount</a></code> | <code>*string</code> | Number of failed logon attempts until a account is locked. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration">LockoutDuration</a></code> | <code>*string</code> | Number of minutes a locked out account must remain locked out. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount">ResetLockoutCount</a></code> | <code>*string</code> | Number of minutes a account will remain locked after a failed logon attempt. |

---

##### `ForceLogoffWhenHourExpire`<sup>Optional</sup> <a name="ForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire"></a>

```go
ForceLogoffWhenHourExpire *string
```

- *Type:* *string

Disconnect SMB sessions when logon hours expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#force_logoff_when_hour_expire GpoSecurity#force_logoff_when_hour_expire}

---

##### `LockoutBadCount`<sup>Optional</sup> <a name="LockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount"></a>

```go
LockoutBadCount *string
```

- *Type:* *string

Number of failed logon attempts until a account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_bad_count GpoSecurity#lockout_bad_count}

---

##### `LockoutDuration`<sup>Optional</sup> <a name="LockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration"></a>

```go
LockoutDuration *string
```

- *Type:* *string

Number of minutes a locked out account must remain locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_duration GpoSecurity#lockout_duration}

---

##### `ResetLockoutCount`<sup>Optional</sup> <a name="ResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount"></a>

```go
ResetLockoutCount *string
```

- *Type:* *string

Number of minutes a account will remain locked after a failed logon attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#reset_lockout_count GpoSecurity#reset_lockout_count}

---

### GpoSecurityApplicationLog <a name="GpoSecurityApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityApplicationLog {
	AuditLogRetentionPeriod: *string,
	MaximumLogSize: *string,
	RestrictGuestAccess: *string,
	RetentionDays: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>*string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize">MaximumLogSize</a></code> | <code>*string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>*string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays">RetentionDays</a></code> | <code>*string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `AuditLogRetentionPeriod`<sup>Optional</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod"></a>

```go
AuditLogRetentionPeriod *string
```

- *Type:* *string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `MaximumLogSize`<sup>Optional</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize"></a>

```go
MaximumLogSize *string
```

- *Type:* *string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `RestrictGuestAccess`<sup>Optional</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess"></a>

```go
RestrictGuestAccess *string
```

- *Type:* *string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays"></a>

```go
RetentionDays *string
```

- *Type:* *string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityAuditLog <a name="GpoSecurityAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityAuditLog {
	AuditLogRetentionPeriod: *string,
	MaximumLogSize: *string,
	RestrictGuestAccess: *string,
	RetentionDays: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>*string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize">MaximumLogSize</a></code> | <code>*string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>*string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays">RetentionDays</a></code> | <code>*string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `AuditLogRetentionPeriod`<sup>Optional</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod"></a>

```go
AuditLogRetentionPeriod *string
```

- *Type:* *string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `MaximumLogSize`<sup>Optional</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize"></a>

```go
MaximumLogSize *string
```

- *Type:* *string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `RestrictGuestAccess`<sup>Optional</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess"></a>

```go
RestrictGuestAccess *string
```

- *Type:* *string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays"></a>

```go
RetentionDays *string
```

- *Type:* *string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityConfig <a name="GpoSecurityConfig" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GpoContainer: *string,
	AccountLockout: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecurityAccountLockout,
	ApplicationLog: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecurityApplicationLog,
	AuditLog: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecurityAuditLog,
	EventAudit: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecurityEventAudit,
	Filesystem: interface{},
	Id: *string,
	KerberosPolicy: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecurityKerberosPolicy,
	PasswordPolicies: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecurityPasswordPolicies,
	RegistryKeys: interface{},
	RegistryValues: interface{},
	RestrictedGroups: interface{},
	SystemLog: github.com/cdktf/cdktf-provider-ad-go/ad.gpoSecurity.GpoSecuritySystemLog,
	SystemServices: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer">GpoContainer</a></code> | <code>*string</code> | The GUID of the container the security settings belong to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout">AccountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | account_lockout block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog">ApplicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | application_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog">AuditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | audit_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit">EventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | event_audit block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem">Filesystem</a></code> | <code>interface{}</code> | filesystem block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy">KerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | kerberos_policy block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies">PasswordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | password_policies block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys">RegistryKeys</a></code> | <code>interface{}</code> | registry_keys block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues">RegistryValues</a></code> | <code>interface{}</code> | registry_values block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups">RestrictedGroups</a></code> | <code>interface{}</code> | restricted_groups block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog">SystemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | system_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices">SystemServices</a></code> | <code>interface{}</code> | system_services block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GpoContainer`<sup>Required</sup> <a name="GpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer"></a>

```go
GpoContainer *string
```

- *Type:* *string

The GUID of the container the security settings belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#gpo_container GpoSecurity#gpo_container}

---

##### `AccountLockout`<sup>Optional</sup> <a name="AccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout"></a>

```go
AccountLockout GpoSecurityAccountLockout
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

account_lockout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#account_lockout GpoSecurity#account_lockout}

---

##### `ApplicationLog`<sup>Optional</sup> <a name="ApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog"></a>

```go
ApplicationLog GpoSecurityApplicationLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

application_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#application_log GpoSecurity#application_log}

---

##### `AuditLog`<sup>Optional</sup> <a name="AuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog"></a>

```go
AuditLog GpoSecurityAuditLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log GpoSecurity#audit_log}

---

##### `EventAudit`<sup>Optional</sup> <a name="EventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit"></a>

```go
EventAudit GpoSecurityEventAudit
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

event_audit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#event_audit GpoSecurity#event_audit}

---

##### `Filesystem`<sup>Optional</sup> <a name="Filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem"></a>

```go
Filesystem interface{}
```

- *Type:* interface{}

filesystem block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#filesystem GpoSecurity#filesystem}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosPolicy`<sup>Optional</sup> <a name="KerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy"></a>

```go
KerberosPolicy GpoSecurityKerberosPolicy
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

kerberos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}

---

##### `PasswordPolicies`<sup>Optional</sup> <a name="PasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies"></a>

```go
PasswordPolicies GpoSecurityPasswordPolicies
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

password_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_policies GpoSecurity#password_policies}

---

##### `RegistryKeys`<sup>Optional</sup> <a name="RegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys"></a>

```go
RegistryKeys interface{}
```

- *Type:* interface{}

registry_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_keys GpoSecurity#registry_keys}

---

##### `RegistryValues`<sup>Optional</sup> <a name="RegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues"></a>

```go
RegistryValues interface{}
```

- *Type:* interface{}

registry_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_values GpoSecurity#registry_values}

---

##### `RestrictedGroups`<sup>Optional</sup> <a name="RestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups"></a>

```go
RestrictedGroups interface{}
```

- *Type:* interface{}

restricted_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restricted_groups GpoSecurity#restricted_groups}

---

##### `SystemLog`<sup>Optional</sup> <a name="SystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog"></a>

```go
SystemLog GpoSecuritySystemLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

system_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_log GpoSecurity#system_log}

---

##### `SystemServices`<sup>Optional</sup> <a name="SystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices"></a>

```go
SystemServices interface{}
```

- *Type:* interface{}

system_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_services GpoSecurity#system_services}

---

### GpoSecurityEventAudit <a name="GpoSecurityEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityEventAudit {
	AuditAccountLogon: *string,
	AuditAccountManage: *string,
	AuditDsAccess: *string,
	AuditLogonEvents: *string,
	AuditObjectAccess: *string,
	AuditPolicyChange: *string,
	AuditPrivilegeUse: *string,
	AuditProcessTracking: *string,
	AuditSystemEvents: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon">AuditAccountLogon</a></code> | <code>*string</code> | Audit credential validation. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage">AuditAccountManage</a></code> | <code>*string</code> | Audit account management events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess">AuditDsAccess</a></code> | <code>*string</code> | Audit access attempts to AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents">AuditLogonEvents</a></code> | <code>*string</code> | Audit logon events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess">AuditObjectAccess</a></code> | <code>*string</code> | Audit access attempts to non-AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange">AuditPolicyChange</a></code> | <code>*string</code> | Audit attempts to change a policy. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse">AuditPrivilegeUse</a></code> | <code>*string</code> | Audit user attempts of exercising user rights. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking">AuditProcessTracking</a></code> | <code>*string</code> | Audit process related events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents">AuditSystemEvents</a></code> | <code>*string</code> | Audit system events. |

---

##### `AuditAccountLogon`<sup>Optional</sup> <a name="AuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon"></a>

```go
AuditAccountLogon *string
```

- *Type:* *string

Audit credential validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_logon GpoSecurity#audit_account_logon}

---

##### `AuditAccountManage`<sup>Optional</sup> <a name="AuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage"></a>

```go
AuditAccountManage *string
```

- *Type:* *string

Audit account management events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_manage GpoSecurity#audit_account_manage}

---

##### `AuditDsAccess`<sup>Optional</sup> <a name="AuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess"></a>

```go
AuditDsAccess *string
```

- *Type:* *string

Audit access attempts to AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_ds_access GpoSecurity#audit_ds_access}

---

##### `AuditLogonEvents`<sup>Optional</sup> <a name="AuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents"></a>

```go
AuditLogonEvents *string
```

- *Type:* *string

Audit logon events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_logon_events GpoSecurity#audit_logon_events}

---

##### `AuditObjectAccess`<sup>Optional</sup> <a name="AuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess"></a>

```go
AuditObjectAccess *string
```

- *Type:* *string

Audit access attempts to non-AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_object_access GpoSecurity#audit_object_access}

---

##### `AuditPolicyChange`<sup>Optional</sup> <a name="AuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange"></a>

```go
AuditPolicyChange *string
```

- *Type:* *string

Audit attempts to change a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_policy_change GpoSecurity#audit_policy_change}

---

##### `AuditPrivilegeUse`<sup>Optional</sup> <a name="AuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse"></a>

```go
AuditPrivilegeUse *string
```

- *Type:* *string

Audit user attempts of exercising user rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_privilege_use GpoSecurity#audit_privilege_use}

---

##### `AuditProcessTracking`<sup>Optional</sup> <a name="AuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking"></a>

```go
AuditProcessTracking *string
```

- *Type:* *string

Audit process related events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_process_tracking GpoSecurity#audit_process_tracking}

---

##### `AuditSystemEvents`<sup>Optional</sup> <a name="AuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents"></a>

```go
AuditSystemEvents *string
```

- *Type:* *string

Audit system events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_system_events GpoSecurity#audit_system_events}

---

### GpoSecurityFilesystem <a name="GpoSecurityFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityFilesystem {
	Acl: *string,
	Path: *string,
	PropagationMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl">Acl</a></code> | <code>*string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path">Path</a></code> | <code>*string</code> | Path of the file or directory. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode">PropagationMode</a></code> | <code>*string</code> | Control permission propagation. |

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl"></a>

```go
Acl *string
```

- *Type:* *string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the file or directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#path GpoSecurity#path}

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode"></a>

```go
PropagationMode *string
```

- *Type:* *string

Control permission propagation.

0: Propagate permissions to all subfolders and files, 1: Replace existing permissions on all subfolders and files, 2: Do not allow permissions to be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityKerberosPolicy <a name="GpoSecurityKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityKerberosPolicy {
	MaxClockSkew: *string,
	MaxRenewAge: *string,
	MaxServiceAge: *string,
	MaxTicketAge: *string,
	TicketValidateClient: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew">MaxClockSkew</a></code> | <code>*string</code> | Maximum time difference, in minutes, between the client clock and the server clock. (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge">MaxRenewAge</a></code> | <code>*string</code> | Number of days during which a ticket-granting ticket can be renewed (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge">MaxServiceAge</a></code> | <code>*string</code> | Maximum amount of minutes a ticket must be valid to access a service or resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge">MaxTicketAge</a></code> | <code>*string</code> | Maximum amount of hours a ticket-granting ticket is valid (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient">TicketValidateClient</a></code> | <code>*string</code> | Control if the session ticket is validated for every request. A non-zero value disables the policy. |

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew"></a>

```go
MaxClockSkew *string
```

- *Type:* *string

Maximum time difference, in minutes, between the client clock and the server clock. (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_clock_skew GpoSecurity#max_clock_skew}

---

##### `MaxRenewAge`<sup>Optional</sup> <a name="MaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge"></a>

```go
MaxRenewAge *string
```

- *Type:* *string

Number of days during which a ticket-granting ticket can be renewed (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_renew_age GpoSecurity#max_renew_age}

---

##### `MaxServiceAge`<sup>Optional</sup> <a name="MaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge"></a>

```go
MaxServiceAge *string
```

- *Type:* *string

Maximum amount of minutes a ticket must be valid to access a service or resource.

Minimum should be 10 and maximum should be equal to `max_ticket_age`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_service_age GpoSecurity#max_service_age}

---

##### `MaxTicketAge`<sup>Optional</sup> <a name="MaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge"></a>

```go
MaxTicketAge *string
```

- *Type:* *string

Maximum amount of hours a ticket-granting ticket is valid (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_ticket_age GpoSecurity#max_ticket_age}

---

##### `TicketValidateClient`<sup>Optional</sup> <a name="TicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient"></a>

```go
TicketValidateClient *string
```

- *Type:* *string

Control if the session ticket is validated for every request. A non-zero value disables the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#ticket_validate_client GpoSecurity#ticket_validate_client}

---

### GpoSecurityPasswordPolicies <a name="GpoSecurityPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityPasswordPolicies {
	ClearTextPassword: *string,
	MaximumPasswordAge: *string,
	MinimumPasswordAge: *string,
	MinimumPasswordLength: *string,
	PasswordComplexity: *string,
	PasswordHistorySize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword">ClearTextPassword</a></code> | <code>*string</code> | Store password with reversible encryption (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge">MaximumPasswordAge</a></code> | <code>*string</code> | Number of days before password expires (-1-999). If set to -1, it means the password never expires. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge">MinimumPasswordAge</a></code> | <code>*string</code> | Number of days a password must be used before changing it (0-999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*string</code> | Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity">PasswordComplexity</a></code> | <code>*string</code> | Password must meet complexity requirements (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize">PasswordHistorySize</a></code> | <code>*string</code> | The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16). |

---

##### `ClearTextPassword`<sup>Optional</sup> <a name="ClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword"></a>

```go
ClearTextPassword *string
```

- *Type:* *string

Store password with reversible encryption (0-2^16).

The password will not be stored with reversible encryption if the value is set to 0. Reversible encryption will be used in any other case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#clear_text_password GpoSecurity#clear_text_password}

---

##### `MaximumPasswordAge`<sup>Optional</sup> <a name="MaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge"></a>

```go
MaximumPasswordAge *string
```

- *Type:* *string

Number of days before password expires (-1-999). If set to -1, it means the password never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_password_age GpoSecurity#maximum_password_age}

---

##### `MinimumPasswordAge`<sup>Optional</sup> <a name="MinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge"></a>

```go
MinimumPasswordAge *string
```

- *Type:* *string

Number of days a password must be used before changing it (0-999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_age GpoSecurity#minimum_password_age}

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength"></a>

```go
MinimumPasswordLength *string
```

- *Type:* *string

Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_length GpoSecurity#minimum_password_length}

---

##### `PasswordComplexity`<sup>Optional</sup> <a name="PasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity"></a>

```go
PasswordComplexity *string
```

- *Type:* *string

Password must meet complexity requirements (0-2^16).

If set to 0, then requirements do not apply, any other value means requirements are applied

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_complexity GpoSecurity#password_complexity}

---

##### `PasswordHistorySize`<sup>Optional</sup> <a name="PasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize"></a>

```go
PasswordHistorySize *string
```

- *Type:* *string

The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16).

A value of 0 indicates that the password history is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_history_size GpoSecurity#password_history_size}

---

### GpoSecurityRegistryKeys <a name="GpoSecurityRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityRegistryKeys {
	Acl: *string,
	KeyName: *string,
	PropagationMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl">Acl</a></code> | <code>*string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName">KeyName</a></code> | <code>*string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode">PropagationMode</a></code> | <code>*string</code> | Control permission propagation. |

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl"></a>

```go
Acl *string
```

- *Type:* *string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode"></a>

```go
PropagationMode *string
```

- *Type:* *string

Control permission propagation.

0: Propagate permissions to all subkeys, 1: Replace existing permissions on all subkeys, 2: Do not allow permissions to be replaced on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityRegistryValues <a name="GpoSecurityRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityRegistryValues {
	KeyName: *string,
	Value: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName">KeyName</a></code> | <code>*string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value">Value</a></code> | <code>*string</code> | The value of the key, matching the type set in `value_type`. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType">ValueType</a></code> | <code>*string</code> | Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the key, matching the type set in `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value GpoSecurity#value}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value_type GpoSecurity#value_type}

---

### GpoSecurityRestrictedGroups <a name="GpoSecurityRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecurityRestrictedGroups {
	GroupMemberof: *string,
	GroupMembers: *string,
	GroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof">GroupMemberof</a></code> | <code>*string</code> | Comma separated list of group names or SIDs that this group belongs to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers">GroupMembers</a></code> | <code>*string</code> | Comma separated list of group names or SIDs that are members of the group. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName">GroupName</a></code> | <code>*string</code> | Name of the group we are managing. |

---

##### `GroupMemberof`<sup>Required</sup> <a name="GroupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof"></a>

```go
GroupMemberof *string
```

- *Type:* *string

Comma separated list of group names or SIDs that this group belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_memberof GpoSecurity#group_memberof}

---

##### `GroupMembers`<sup>Required</sup> <a name="GroupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers"></a>

```go
GroupMembers *string
```

- *Type:* *string

Comma separated list of group names or SIDs that are members of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_members GpoSecurity#group_members}

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Name of the group we are managing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_name GpoSecurity#group_name}

---

### GpoSecuritySystemLog <a name="GpoSecuritySystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecuritySystemLog {
	AuditLogRetentionPeriod: *string,
	MaximumLogSize: *string,
	RestrictGuestAccess: *string,
	RetentionDays: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>*string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize">MaximumLogSize</a></code> | <code>*string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>*string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays">RetentionDays</a></code> | <code>*string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `AuditLogRetentionPeriod`<sup>Optional</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod"></a>

```go
AuditLogRetentionPeriod *string
```

- *Type:* *string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `MaximumLogSize`<sup>Optional</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize"></a>

```go
MaximumLogSize *string
```

- *Type:* *string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `RestrictGuestAccess`<sup>Optional</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess"></a>

```go
RestrictGuestAccess *string
```

- *Type:* *string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays"></a>

```go
RetentionDays *string
```

- *Type:* *string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecuritySystemServices <a name="GpoSecuritySystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

&gposecurity.GpoSecuritySystemServices {
	Acl: *string,
	ServiceName: *string,
	StartupMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl">Acl</a></code> | <code>*string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName">ServiceName</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode">StartupMode</a></code> | <code>*string</code> | Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled. |

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl"></a>

```go
Acl *string
```

- *Type:* *string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#service_name GpoSecurity#service_name}

---

##### `StartupMode`<sup>Required</sup> <a name="StartupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode"></a>

```go
StartupMode *string
```

- *Type:* *string

Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#startup_mode GpoSecurity#startup_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### GpoSecurityAccountLockoutOutputReference <a name="GpoSecurityAccountLockoutOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityAccountLockoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecurityAccountLockoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire">ResetForceLogoffWhenHourExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount">ResetLockoutBadCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration">ResetLockoutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount">ResetResetLockoutCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForceLogoffWhenHourExpire` <a name="ResetForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire"></a>

```go
func ResetForceLogoffWhenHourExpire()
```

##### `ResetLockoutBadCount` <a name="ResetLockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount"></a>

```go
func ResetLockoutBadCount()
```

##### `ResetLockoutDuration` <a name="ResetLockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration"></a>

```go
func ResetLockoutDuration()
```

##### `ResetResetLockoutCount` <a name="ResetResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount"></a>

```go
func ResetResetLockoutCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput">ForceLogoffWhenHourExpireInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput">LockoutBadCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput">LockoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput">ResetLockoutCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire">ForceLogoffWhenHourExpire</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount">LockoutBadCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration">LockoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount">ResetLockoutCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForceLogoffWhenHourExpireInput`<sup>Optional</sup> <a name="ForceLogoffWhenHourExpireInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput"></a>

```go
func ForceLogoffWhenHourExpireInput() *string
```

- *Type:* *string

---

##### `LockoutBadCountInput`<sup>Optional</sup> <a name="LockoutBadCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput"></a>

```go
func LockoutBadCountInput() *string
```

- *Type:* *string

---

##### `LockoutDurationInput`<sup>Optional</sup> <a name="LockoutDurationInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput"></a>

```go
func LockoutDurationInput() *string
```

- *Type:* *string

---

##### `ResetLockoutCountInput`<sup>Optional</sup> <a name="ResetLockoutCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput"></a>

```go
func ResetLockoutCountInput() *string
```

- *Type:* *string

---

##### `ForceLogoffWhenHourExpire`<sup>Required</sup> <a name="ForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire"></a>

```go
func ForceLogoffWhenHourExpire() *string
```

- *Type:* *string

---

##### `LockoutBadCount`<sup>Required</sup> <a name="LockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount"></a>

```go
func LockoutBadCount() *string
```

- *Type:* *string

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration"></a>

```go
func LockoutDuration() *string
```

- *Type:* *string

---

##### `ResetLockoutCount`<sup>Required</sup> <a name="ResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount"></a>

```go
func ResetLockoutCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecurityAccountLockout
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---


### GpoSecurityApplicationLogOutputReference <a name="GpoSecurityApplicationLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityApplicationLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecurityApplicationLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod">ResetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize">ResetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess">ResetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogRetentionPeriod` <a name="ResetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod"></a>

```go
func ResetAuditLogRetentionPeriod()
```

##### `ResetMaximumLogSize` <a name="ResetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize"></a>

```go
func ResetMaximumLogSize()
```

##### `ResetRestrictGuestAccess` <a name="ResetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess"></a>

```go
func ResetRestrictGuestAccess()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput">AuditLogRetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput">MaximumLogSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput">RestrictGuestAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize">MaximumLogSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogRetentionPeriodInput`<sup>Optional</sup> <a name="AuditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```go
func AuditLogRetentionPeriodInput() *string
```

- *Type:* *string

---

##### `MaximumLogSizeInput`<sup>Optional</sup> <a name="MaximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput"></a>

```go
func MaximumLogSizeInput() *string
```

- *Type:* *string

---

##### `RestrictGuestAccessInput`<sup>Optional</sup> <a name="RestrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput"></a>

```go
func RestrictGuestAccessInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *string
```

- *Type:* *string

---

##### `AuditLogRetentionPeriod`<sup>Required</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod"></a>

```go
func AuditLogRetentionPeriod() *string
```

- *Type:* *string

---

##### `MaximumLogSize`<sup>Required</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize"></a>

```go
func MaximumLogSize() *string
```

- *Type:* *string

---

##### `RestrictGuestAccess`<sup>Required</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess"></a>

```go
func RestrictGuestAccess() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecurityApplicationLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---


### GpoSecurityAuditLogOutputReference <a name="GpoSecurityAuditLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityAuditLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecurityAuditLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod">ResetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize">ResetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess">ResetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogRetentionPeriod` <a name="ResetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod"></a>

```go
func ResetAuditLogRetentionPeriod()
```

##### `ResetMaximumLogSize` <a name="ResetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize"></a>

```go
func ResetMaximumLogSize()
```

##### `ResetRestrictGuestAccess` <a name="ResetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess"></a>

```go
func ResetRestrictGuestAccess()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput">AuditLogRetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput">MaximumLogSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput">RestrictGuestAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize">MaximumLogSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogRetentionPeriodInput`<sup>Optional</sup> <a name="AuditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```go
func AuditLogRetentionPeriodInput() *string
```

- *Type:* *string

---

##### `MaximumLogSizeInput`<sup>Optional</sup> <a name="MaximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput"></a>

```go
func MaximumLogSizeInput() *string
```

- *Type:* *string

---

##### `RestrictGuestAccessInput`<sup>Optional</sup> <a name="RestrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput"></a>

```go
func RestrictGuestAccessInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *string
```

- *Type:* *string

---

##### `AuditLogRetentionPeriod`<sup>Required</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod"></a>

```go
func AuditLogRetentionPeriod() *string
```

- *Type:* *string

---

##### `MaximumLogSize`<sup>Required</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize"></a>

```go
func MaximumLogSize() *string
```

- *Type:* *string

---

##### `RestrictGuestAccess`<sup>Required</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess"></a>

```go
func RestrictGuestAccess() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecurityAuditLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---


### GpoSecurityEventAuditOutputReference <a name="GpoSecurityEventAuditOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityEventAuditOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecurityEventAuditOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon">ResetAuditAccountLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage">ResetAuditAccountManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess">ResetAuditDsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents">ResetAuditLogonEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess">ResetAuditObjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange">ResetAuditPolicyChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse">ResetAuditPrivilegeUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking">ResetAuditProcessTracking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents">ResetAuditSystemEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditAccountLogon` <a name="ResetAuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon"></a>

```go
func ResetAuditAccountLogon()
```

##### `ResetAuditAccountManage` <a name="ResetAuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage"></a>

```go
func ResetAuditAccountManage()
```

##### `ResetAuditDsAccess` <a name="ResetAuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess"></a>

```go
func ResetAuditDsAccess()
```

##### `ResetAuditLogonEvents` <a name="ResetAuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents"></a>

```go
func ResetAuditLogonEvents()
```

##### `ResetAuditObjectAccess` <a name="ResetAuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess"></a>

```go
func ResetAuditObjectAccess()
```

##### `ResetAuditPolicyChange` <a name="ResetAuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange"></a>

```go
func ResetAuditPolicyChange()
```

##### `ResetAuditPrivilegeUse` <a name="ResetAuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse"></a>

```go
func ResetAuditPrivilegeUse()
```

##### `ResetAuditProcessTracking` <a name="ResetAuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking"></a>

```go
func ResetAuditProcessTracking()
```

##### `ResetAuditSystemEvents` <a name="ResetAuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents"></a>

```go
func ResetAuditSystemEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput">AuditAccountLogonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput">AuditAccountManageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput">AuditDsAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput">AuditLogonEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput">AuditObjectAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput">AuditPolicyChangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput">AuditPrivilegeUseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput">AuditProcessTrackingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput">AuditSystemEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon">AuditAccountLogon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage">AuditAccountManage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess">AuditDsAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents">AuditLogonEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess">AuditObjectAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange">AuditPolicyChange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse">AuditPrivilegeUse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking">AuditProcessTracking</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents">AuditSystemEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditAccountLogonInput`<sup>Optional</sup> <a name="AuditAccountLogonInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput"></a>

```go
func AuditAccountLogonInput() *string
```

- *Type:* *string

---

##### `AuditAccountManageInput`<sup>Optional</sup> <a name="AuditAccountManageInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput"></a>

```go
func AuditAccountManageInput() *string
```

- *Type:* *string

---

##### `AuditDsAccessInput`<sup>Optional</sup> <a name="AuditDsAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput"></a>

```go
func AuditDsAccessInput() *string
```

- *Type:* *string

---

##### `AuditLogonEventsInput`<sup>Optional</sup> <a name="AuditLogonEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput"></a>

```go
func AuditLogonEventsInput() *string
```

- *Type:* *string

---

##### `AuditObjectAccessInput`<sup>Optional</sup> <a name="AuditObjectAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput"></a>

```go
func AuditObjectAccessInput() *string
```

- *Type:* *string

---

##### `AuditPolicyChangeInput`<sup>Optional</sup> <a name="AuditPolicyChangeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput"></a>

```go
func AuditPolicyChangeInput() *string
```

- *Type:* *string

---

##### `AuditPrivilegeUseInput`<sup>Optional</sup> <a name="AuditPrivilegeUseInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput"></a>

```go
func AuditPrivilegeUseInput() *string
```

- *Type:* *string

---

##### `AuditProcessTrackingInput`<sup>Optional</sup> <a name="AuditProcessTrackingInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput"></a>

```go
func AuditProcessTrackingInput() *string
```

- *Type:* *string

---

##### `AuditSystemEventsInput`<sup>Optional</sup> <a name="AuditSystemEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput"></a>

```go
func AuditSystemEventsInput() *string
```

- *Type:* *string

---

##### `AuditAccountLogon`<sup>Required</sup> <a name="AuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon"></a>

```go
func AuditAccountLogon() *string
```

- *Type:* *string

---

##### `AuditAccountManage`<sup>Required</sup> <a name="AuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage"></a>

```go
func AuditAccountManage() *string
```

- *Type:* *string

---

##### `AuditDsAccess`<sup>Required</sup> <a name="AuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess"></a>

```go
func AuditDsAccess() *string
```

- *Type:* *string

---

##### `AuditLogonEvents`<sup>Required</sup> <a name="AuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents"></a>

```go
func AuditLogonEvents() *string
```

- *Type:* *string

---

##### `AuditObjectAccess`<sup>Required</sup> <a name="AuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess"></a>

```go
func AuditObjectAccess() *string
```

- *Type:* *string

---

##### `AuditPolicyChange`<sup>Required</sup> <a name="AuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange"></a>

```go
func AuditPolicyChange() *string
```

- *Type:* *string

---

##### `AuditPrivilegeUse`<sup>Required</sup> <a name="AuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse"></a>

```go
func AuditPrivilegeUse() *string
```

- *Type:* *string

---

##### `AuditProcessTracking`<sup>Required</sup> <a name="AuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking"></a>

```go
func AuditProcessTracking() *string
```

- *Type:* *string

---

##### `AuditSystemEvents`<sup>Required</sup> <a name="AuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents"></a>

```go
func AuditSystemEvents() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecurityEventAudit
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---


### GpoSecurityFilesystemList <a name="GpoSecurityFilesystemList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityFilesystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GpoSecurityFilesystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get"></a>

```go
func Get(index *f64) GpoSecurityFilesystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityFilesystemOutputReference <a name="GpoSecurityFilesystemOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityFilesystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GpoSecurityFilesystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput">AclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput">PropagationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl">Acl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode">PropagationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput"></a>

```go
func AclInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PropagationModeInput`<sup>Optional</sup> <a name="PropagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput"></a>

```go
func PropagationModeInput() *string
```

- *Type:* *string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl"></a>

```go
func Acl() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode"></a>

```go
func PropagationMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityKerberosPolicyOutputReference <a name="GpoSecurityKerberosPolicyOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityKerberosPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecurityKerberosPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge">ResetMaxRenewAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge">ResetMaxServiceAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge">ResetMaxTicketAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient">ResetTicketValidateClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew"></a>

```go
func ResetMaxClockSkew()
```

##### `ResetMaxRenewAge` <a name="ResetMaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge"></a>

```go
func ResetMaxRenewAge()
```

##### `ResetMaxServiceAge` <a name="ResetMaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge"></a>

```go
func ResetMaxServiceAge()
```

##### `ResetMaxTicketAge` <a name="ResetMaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge"></a>

```go
func ResetMaxTicketAge()
```

##### `ResetTicketValidateClient` <a name="ResetTicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient"></a>

```go
func ResetTicketValidateClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput">MaxRenewAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput">MaxServiceAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput">MaxTicketAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput">TicketValidateClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew">MaxClockSkew</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge">MaxRenewAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge">MaxServiceAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge">MaxTicketAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient">TicketValidateClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput"></a>

```go
func MaxClockSkewInput() *string
```

- *Type:* *string

---

##### `MaxRenewAgeInput`<sup>Optional</sup> <a name="MaxRenewAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput"></a>

```go
func MaxRenewAgeInput() *string
```

- *Type:* *string

---

##### `MaxServiceAgeInput`<sup>Optional</sup> <a name="MaxServiceAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput"></a>

```go
func MaxServiceAgeInput() *string
```

- *Type:* *string

---

##### `MaxTicketAgeInput`<sup>Optional</sup> <a name="MaxTicketAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput"></a>

```go
func MaxTicketAgeInput() *string
```

- *Type:* *string

---

##### `TicketValidateClientInput`<sup>Optional</sup> <a name="TicketValidateClientInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput"></a>

```go
func TicketValidateClientInput() *string
```

- *Type:* *string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew"></a>

```go
func MaxClockSkew() *string
```

- *Type:* *string

---

##### `MaxRenewAge`<sup>Required</sup> <a name="MaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge"></a>

```go
func MaxRenewAge() *string
```

- *Type:* *string

---

##### `MaxServiceAge`<sup>Required</sup> <a name="MaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge"></a>

```go
func MaxServiceAge() *string
```

- *Type:* *string

---

##### `MaxTicketAge`<sup>Required</sup> <a name="MaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge"></a>

```go
func MaxTicketAge() *string
```

- *Type:* *string

---

##### `TicketValidateClient`<sup>Required</sup> <a name="TicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient"></a>

```go
func TicketValidateClient() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecurityKerberosPolicy
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---


### GpoSecurityPasswordPoliciesOutputReference <a name="GpoSecurityPasswordPoliciesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityPasswordPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecurityPasswordPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword">ResetClearTextPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge">ResetMaximumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge">ResetMinimumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity">ResetPasswordComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize">ResetPasswordHistorySize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClearTextPassword` <a name="ResetClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword"></a>

```go
func ResetClearTextPassword()
```

##### `ResetMaximumPasswordAge` <a name="ResetMaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge"></a>

```go
func ResetMaximumPasswordAge()
```

##### `ResetMinimumPasswordAge` <a name="ResetMinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge"></a>

```go
func ResetMinimumPasswordAge()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength"></a>

```go
func ResetMinimumPasswordLength()
```

##### `ResetPasswordComplexity` <a name="ResetPasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity"></a>

```go
func ResetPasswordComplexity()
```

##### `ResetPasswordHistorySize` <a name="ResetPasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize"></a>

```go
func ResetPasswordHistorySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput">ClearTextPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput">MaximumPasswordAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput">MinimumPasswordAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput">PasswordComplexityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput">PasswordHistorySizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword">ClearTextPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge">MaximumPasswordAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge">MinimumPasswordAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity">PasswordComplexity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize">PasswordHistorySize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClearTextPasswordInput`<sup>Optional</sup> <a name="ClearTextPasswordInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput"></a>

```go
func ClearTextPasswordInput() *string
```

- *Type:* *string

---

##### `MaximumPasswordAgeInput`<sup>Optional</sup> <a name="MaximumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput"></a>

```go
func MaximumPasswordAgeInput() *string
```

- *Type:* *string

---

##### `MinimumPasswordAgeInput`<sup>Optional</sup> <a name="MinimumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput"></a>

```go
func MinimumPasswordAgeInput() *string
```

- *Type:* *string

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput"></a>

```go
func MinimumPasswordLengthInput() *string
```

- *Type:* *string

---

##### `PasswordComplexityInput`<sup>Optional</sup> <a name="PasswordComplexityInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput"></a>

```go
func PasswordComplexityInput() *string
```

- *Type:* *string

---

##### `PasswordHistorySizeInput`<sup>Optional</sup> <a name="PasswordHistorySizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput"></a>

```go
func PasswordHistorySizeInput() *string
```

- *Type:* *string

---

##### `ClearTextPassword`<sup>Required</sup> <a name="ClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword"></a>

```go
func ClearTextPassword() *string
```

- *Type:* *string

---

##### `MaximumPasswordAge`<sup>Required</sup> <a name="MaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge"></a>

```go
func MaximumPasswordAge() *string
```

- *Type:* *string

---

##### `MinimumPasswordAge`<sup>Required</sup> <a name="MinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge"></a>

```go
func MinimumPasswordAge() *string
```

- *Type:* *string

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength"></a>

```go
func MinimumPasswordLength() *string
```

- *Type:* *string

---

##### `PasswordComplexity`<sup>Required</sup> <a name="PasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity"></a>

```go
func PasswordComplexity() *string
```

- *Type:* *string

---

##### `PasswordHistorySize`<sup>Required</sup> <a name="PasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize"></a>

```go
func PasswordHistorySize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecurityPasswordPolicies
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---


### GpoSecurityRegistryKeysList <a name="GpoSecurityRegistryKeysList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityRegistryKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GpoSecurityRegistryKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get"></a>

```go
func Get(index *f64) GpoSecurityRegistryKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityRegistryKeysOutputReference <a name="GpoSecurityRegistryKeysOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityRegistryKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GpoSecurityRegistryKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput">AclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput">PropagationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl">Acl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode">PropagationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput"></a>

```go
func AclInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `PropagationModeInput`<sup>Optional</sup> <a name="PropagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput"></a>

```go
func PropagationModeInput() *string
```

- *Type:* *string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl"></a>

```go
func Acl() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode"></a>

```go
func PropagationMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityRegistryValuesList <a name="GpoSecurityRegistryValuesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityRegistryValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GpoSecurityRegistryValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get"></a>

```go
func Get(index *f64) GpoSecurityRegistryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityRegistryValuesOutputReference <a name="GpoSecurityRegistryValuesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityRegistryValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GpoSecurityRegistryValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityRestrictedGroupsList <a name="GpoSecurityRestrictedGroupsList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityRestrictedGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GpoSecurityRestrictedGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get"></a>

```go
func Get(index *f64) GpoSecurityRestrictedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecurityRestrictedGroupsOutputReference <a name="GpoSecurityRestrictedGroupsOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecurityRestrictedGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GpoSecurityRestrictedGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput">GroupMemberofInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput">GroupMembersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof">GroupMemberof</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers">GroupMembers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupMemberofInput`<sup>Optional</sup> <a name="GroupMemberofInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput"></a>

```go
func GroupMemberofInput() *string
```

- *Type:* *string

---

##### `GroupMembersInput`<sup>Optional</sup> <a name="GroupMembersInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput"></a>

```go
func GroupMembersInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `GroupMemberof`<sup>Required</sup> <a name="GroupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof"></a>

```go
func GroupMemberof() *string
```

- *Type:* *string

---

##### `GroupMembers`<sup>Required</sup> <a name="GroupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers"></a>

```go
func GroupMembers() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecuritySystemLogOutputReference <a name="GpoSecuritySystemLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecuritySystemLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GpoSecuritySystemLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod">ResetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize">ResetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess">ResetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogRetentionPeriod` <a name="ResetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod"></a>

```go
func ResetAuditLogRetentionPeriod()
```

##### `ResetMaximumLogSize` <a name="ResetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize"></a>

```go
func ResetMaximumLogSize()
```

##### `ResetRestrictGuestAccess` <a name="ResetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess"></a>

```go
func ResetRestrictGuestAccess()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput">AuditLogRetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput">MaximumLogSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput">RestrictGuestAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize">MaximumLogSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogRetentionPeriodInput`<sup>Optional</sup> <a name="AuditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```go
func AuditLogRetentionPeriodInput() *string
```

- *Type:* *string

---

##### `MaximumLogSizeInput`<sup>Optional</sup> <a name="MaximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput"></a>

```go
func MaximumLogSizeInput() *string
```

- *Type:* *string

---

##### `RestrictGuestAccessInput`<sup>Optional</sup> <a name="RestrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput"></a>

```go
func RestrictGuestAccessInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *string
```

- *Type:* *string

---

##### `AuditLogRetentionPeriod`<sup>Required</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod"></a>

```go
func AuditLogRetentionPeriod() *string
```

- *Type:* *string

---

##### `MaximumLogSize`<sup>Required</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize"></a>

```go
func MaximumLogSize() *string
```

- *Type:* *string

---

##### `RestrictGuestAccess`<sup>Required</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess"></a>

```go
func RestrictGuestAccess() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue"></a>

```go
func InternalValue() GpoSecuritySystemLog
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---


### GpoSecuritySystemServicesList <a name="GpoSecuritySystemServicesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecuritySystemServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GpoSecuritySystemServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get"></a>

```go
func Get(index *f64) GpoSecuritySystemServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GpoSecuritySystemServicesOutputReference <a name="GpoSecuritySystemServicesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/gposecurity"

gposecurity.NewGpoSecuritySystemServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GpoSecuritySystemServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput">AclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput">StartupModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl">Acl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode">StartupMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput"></a>

```go
func AclInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `StartupModeInput`<sup>Optional</sup> <a name="StartupModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput"></a>

```go
func StartupModeInput() *string
```

- *Type:* *string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl"></a>

```go
func Acl() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `StartupMode`<sup>Required</sup> <a name="StartupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode"></a>

```go
func StartupMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



