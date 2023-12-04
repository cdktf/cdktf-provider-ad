# `gpoSecurity` Submodule <a name="`gpoSecurity` Submodule" id="@cdktf/provider-ad.gpoSecurity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GpoSecurity <a name="GpoSecurity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security ad_gpo_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurity(scope: Construct, id: string, config: GpoSecurityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig">GpoSecurityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig">GpoSecurityConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountLockout` <a name="putAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout"></a>

```typescript
public putAccountLockout(value: GpoSecurityAccountLockout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `putApplicationLog` <a name="putApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog"></a>

```typescript
public putApplicationLog(value: GpoSecurityApplicationLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `putAuditLog` <a name="putAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog"></a>

```typescript
public putAuditLog(value: GpoSecurityAuditLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `putEventAudit` <a name="putEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit"></a>

```typescript
public putEventAudit(value: GpoSecurityEventAudit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `putFilesystem` <a name="putFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem"></a>

```typescript
public putFilesystem(value: IResolvable | GpoSecurityFilesystem[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]

---

##### `putKerberosPolicy` <a name="putKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy"></a>

```typescript
public putKerberosPolicy(value: GpoSecurityKerberosPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `putPasswordPolicies` <a name="putPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies"></a>

```typescript
public putPasswordPolicies(value: GpoSecurityPasswordPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `putRegistryKeys` <a name="putRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys"></a>

```typescript
public putRegistryKeys(value: IResolvable | GpoSecurityRegistryKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]

---

##### `putRegistryValues` <a name="putRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues"></a>

```typescript
public putRegistryValues(value: IResolvable | GpoSecurityRegistryValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]

---

##### `putRestrictedGroups` <a name="putRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups"></a>

```typescript
public putRestrictedGroups(value: IResolvable | GpoSecurityRestrictedGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]

---

##### `putSystemLog` <a name="putSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog"></a>

```typescript
public putSystemLog(value: GpoSecuritySystemLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `putSystemServices` <a name="putSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices"></a>

```typescript
public putSystemServices(value: IResolvable | GpoSecuritySystemServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]

---

##### `resetAccountLockout` <a name="resetAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout"></a>

```typescript
public resetAccountLockout(): void
```

##### `resetApplicationLog` <a name="resetApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog"></a>

```typescript
public resetApplicationLog(): void
```

##### `resetAuditLog` <a name="resetAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog"></a>

```typescript
public resetAuditLog(): void
```

##### `resetEventAudit` <a name="resetEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit"></a>

```typescript
public resetEventAudit(): void
```

##### `resetFilesystem` <a name="resetFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem"></a>

```typescript
public resetFilesystem(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKerberosPolicy` <a name="resetKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy"></a>

```typescript
public resetKerberosPolicy(): void
```

##### `resetPasswordPolicies` <a name="resetPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies"></a>

```typescript
public resetPasswordPolicies(): void
```

##### `resetRegistryKeys` <a name="resetRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys"></a>

```typescript
public resetRegistryKeys(): void
```

##### `resetRegistryValues` <a name="resetRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues"></a>

```typescript
public resetRegistryValues(): void
```

##### `resetRestrictedGroups` <a name="resetRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups"></a>

```typescript
public resetRestrictedGroups(): void
```

##### `resetSystemLog` <a name="resetSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog"></a>

```typescript
public resetSystemLog(): void
```

##### `resetSystemServices` <a name="resetSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices"></a>

```typescript
public resetSystemServices(): void
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

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

gpoSecurity.GpoSecurity.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

gpoSecurity.GpoSecurity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

gpoSecurity.GpoSecurity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

gpoSecurity.GpoSecurity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GpoSecurity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GpoSecurity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GpoSecurity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput">filesystemInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput">gpoContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput">kerberosPolicyInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput">passwordPoliciesInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput">registryKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput">registryValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput">restrictedGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput">systemLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput">systemServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer">gpoContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountLockout`<sup>Required</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout"></a>

```typescript
public readonly accountLockout: GpoSecurityAccountLockoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a>

---

##### `applicationLog`<sup>Required</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog"></a>

```typescript
public readonly applicationLog: GpoSecurityApplicationLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a>

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog"></a>

```typescript
public readonly auditLog: GpoSecurityAuditLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a>

---

##### `eventAudit`<sup>Required</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit"></a>

```typescript
public readonly eventAudit: GpoSecurityEventAuditOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a>

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem"></a>

```typescript
public readonly filesystem: GpoSecurityFilesystemList;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a>

---

##### `kerberosPolicy`<sup>Required</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy"></a>

```typescript
public readonly kerberosPolicy: GpoSecurityKerberosPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a>

---

##### `passwordPolicies`<sup>Required</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies"></a>

```typescript
public readonly passwordPolicies: GpoSecurityPasswordPoliciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a>

---

##### `registryKeys`<sup>Required</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys"></a>

```typescript
public readonly registryKeys: GpoSecurityRegistryKeysList;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a>

---

##### `registryValues`<sup>Required</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues"></a>

```typescript
public readonly registryValues: GpoSecurityRegistryValuesList;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a>

---

##### `restrictedGroups`<sup>Required</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups"></a>

```typescript
public readonly restrictedGroups: GpoSecurityRestrictedGroupsList;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a>

---

##### `systemLog`<sup>Required</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog"></a>

```typescript
public readonly systemLog: GpoSecuritySystemLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a>

---

##### `systemServices`<sup>Required</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices"></a>

```typescript
public readonly systemServices: GpoSecuritySystemServicesList;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a>

---

##### `accountLockoutInput`<sup>Optional</sup> <a name="accountLockoutInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput"></a>

```typescript
public readonly accountLockoutInput: GpoSecurityAccountLockout;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `applicationLogInput`<sup>Optional</sup> <a name="applicationLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput"></a>

```typescript
public readonly applicationLogInput: GpoSecurityApplicationLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput"></a>

```typescript
public readonly auditLogInput: GpoSecurityAuditLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `eventAuditInput`<sup>Optional</sup> <a name="eventAuditInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput"></a>

```typescript
public readonly eventAuditInput: GpoSecurityEventAudit;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `filesystemInput`<sup>Optional</sup> <a name="filesystemInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput"></a>

```typescript
public readonly filesystemInput: IResolvable | GpoSecurityFilesystem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]

---

##### `gpoContainerInput`<sup>Optional</sup> <a name="gpoContainerInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput"></a>

```typescript
public readonly gpoContainerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kerberosPolicyInput`<sup>Optional</sup> <a name="kerberosPolicyInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput"></a>

```typescript
public readonly kerberosPolicyInput: GpoSecurityKerberosPolicy;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `passwordPoliciesInput`<sup>Optional</sup> <a name="passwordPoliciesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput"></a>

```typescript
public readonly passwordPoliciesInput: GpoSecurityPasswordPolicies;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `registryKeysInput`<sup>Optional</sup> <a name="registryKeysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput"></a>

```typescript
public readonly registryKeysInput: IResolvable | GpoSecurityRegistryKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]

---

##### `registryValuesInput`<sup>Optional</sup> <a name="registryValuesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput"></a>

```typescript
public readonly registryValuesInput: IResolvable | GpoSecurityRegistryValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]

---

##### `restrictedGroupsInput`<sup>Optional</sup> <a name="restrictedGroupsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput"></a>

```typescript
public readonly restrictedGroupsInput: IResolvable | GpoSecurityRestrictedGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]

---

##### `systemLogInput`<sup>Optional</sup> <a name="systemLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput"></a>

```typescript
public readonly systemLogInput: GpoSecuritySystemLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `systemServicesInput`<sup>Optional</sup> <a name="systemServicesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput"></a>

```typescript
public readonly systemServicesInput: IResolvable | GpoSecuritySystemServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer"></a>

```typescript
public readonly gpoContainer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GpoSecurityAccountLockout <a name="GpoSecurityAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityAccountLockout: gpoSecurity.GpoSecurityAccountLockout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire">forceLogoffWhenHourExpire</a></code> | <code>string</code> | Disconnect SMB sessions when logon hours expire. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount">lockoutBadCount</a></code> | <code>string</code> | Number of failed logon attempts until a account is locked. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration">lockoutDuration</a></code> | <code>string</code> | Number of minutes a locked out account must remain locked out. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount">resetLockoutCount</a></code> | <code>string</code> | Number of minutes a account will remain locked after a failed logon attempt. |

---

##### `forceLogoffWhenHourExpire`<sup>Optional</sup> <a name="forceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire"></a>

```typescript
public readonly forceLogoffWhenHourExpire: string;
```

- *Type:* string

Disconnect SMB sessions when logon hours expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#force_logoff_when_hour_expire GpoSecurity#force_logoff_when_hour_expire}

---

##### `lockoutBadCount`<sup>Optional</sup> <a name="lockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount"></a>

```typescript
public readonly lockoutBadCount: string;
```

- *Type:* string

Number of failed logon attempts until a account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_bad_count GpoSecurity#lockout_bad_count}

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: string;
```

- *Type:* string

Number of minutes a locked out account must remain locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_duration GpoSecurity#lockout_duration}

---

##### `resetLockoutCount`<sup>Optional</sup> <a name="resetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount"></a>

```typescript
public readonly resetLockoutCount: string;
```

- *Type:* string

Number of minutes a account will remain locked after a failed logon attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#reset_lockout_count GpoSecurity#reset_lockout_count}

---

### GpoSecurityApplicationLog <a name="GpoSecurityApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityApplicationLog: gpoSecurity.GpoSecurityApplicationLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays">retentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityAuditLog <a name="GpoSecurityAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityAuditLog: gpoSecurity.GpoSecurityAuditLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays">retentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityConfig <a name="GpoSecurityConfig" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityConfig: gpoSecurity.GpoSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer">gpoContainer</a></code> | <code>string</code> | The GUID of the container the security settings belong to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout">accountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | account_lockout block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog">applicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | application_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog">auditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | audit_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit">eventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | event_audit block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem">filesystem</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]</code> | filesystem block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy">kerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | kerberos_policy block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies">passwordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | password_policies block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys">registryKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]</code> | registry_keys block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues">registryValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]</code> | registry_values block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups">restrictedGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]</code> | restricted_groups block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog">systemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | system_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices">systemServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]</code> | system_services block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer"></a>

```typescript
public readonly gpoContainer: string;
```

- *Type:* string

The GUID of the container the security settings belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#gpo_container GpoSecurity#gpo_container}

---

##### `accountLockout`<sup>Optional</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout"></a>

```typescript
public readonly accountLockout: GpoSecurityAccountLockout;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

account_lockout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#account_lockout GpoSecurity#account_lockout}

---

##### `applicationLog`<sup>Optional</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog"></a>

```typescript
public readonly applicationLog: GpoSecurityApplicationLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

application_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#application_log GpoSecurity#application_log}

---

##### `auditLog`<sup>Optional</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog"></a>

```typescript
public readonly auditLog: GpoSecurityAuditLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log GpoSecurity#audit_log}

---

##### `eventAudit`<sup>Optional</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit"></a>

```typescript
public readonly eventAudit: GpoSecurityEventAudit;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

event_audit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#event_audit GpoSecurity#event_audit}

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem"></a>

```typescript
public readonly filesystem: IResolvable | GpoSecurityFilesystem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]

filesystem block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#filesystem GpoSecurity#filesystem}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosPolicy`<sup>Optional</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy"></a>

```typescript
public readonly kerberosPolicy: GpoSecurityKerberosPolicy;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

kerberos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}

---

##### `passwordPolicies`<sup>Optional</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies"></a>

```typescript
public readonly passwordPolicies: GpoSecurityPasswordPolicies;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

password_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_policies GpoSecurity#password_policies}

---

##### `registryKeys`<sup>Optional</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys"></a>

```typescript
public readonly registryKeys: IResolvable | GpoSecurityRegistryKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]

registry_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_keys GpoSecurity#registry_keys}

---

##### `registryValues`<sup>Optional</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues"></a>

```typescript
public readonly registryValues: IResolvable | GpoSecurityRegistryValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]

registry_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_values GpoSecurity#registry_values}

---

##### `restrictedGroups`<sup>Optional</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups"></a>

```typescript
public readonly restrictedGroups: IResolvable | GpoSecurityRestrictedGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]

restricted_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restricted_groups GpoSecurity#restricted_groups}

---

##### `systemLog`<sup>Optional</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog"></a>

```typescript
public readonly systemLog: GpoSecuritySystemLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

system_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_log GpoSecurity#system_log}

---

##### `systemServices`<sup>Optional</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices"></a>

```typescript
public readonly systemServices: IResolvable | GpoSecuritySystemServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]

system_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_services GpoSecurity#system_services}

---

### GpoSecurityEventAudit <a name="GpoSecurityEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityEventAudit: gpoSecurity.GpoSecurityEventAudit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon">auditAccountLogon</a></code> | <code>string</code> | Audit credential validation. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage">auditAccountManage</a></code> | <code>string</code> | Audit account management events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess">auditDsAccess</a></code> | <code>string</code> | Audit access attempts to AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents">auditLogonEvents</a></code> | <code>string</code> | Audit logon events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess">auditObjectAccess</a></code> | <code>string</code> | Audit access attempts to non-AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange">auditPolicyChange</a></code> | <code>string</code> | Audit attempts to change a policy. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse">auditPrivilegeUse</a></code> | <code>string</code> | Audit user attempts of exercising user rights. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking">auditProcessTracking</a></code> | <code>string</code> | Audit process related events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents">auditSystemEvents</a></code> | <code>string</code> | Audit system events. |

---

##### `auditAccountLogon`<sup>Optional</sup> <a name="auditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon"></a>

```typescript
public readonly auditAccountLogon: string;
```

- *Type:* string

Audit credential validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_logon GpoSecurity#audit_account_logon}

---

##### `auditAccountManage`<sup>Optional</sup> <a name="auditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage"></a>

```typescript
public readonly auditAccountManage: string;
```

- *Type:* string

Audit account management events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_manage GpoSecurity#audit_account_manage}

---

##### `auditDsAccess`<sup>Optional</sup> <a name="auditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess"></a>

```typescript
public readonly auditDsAccess: string;
```

- *Type:* string

Audit access attempts to AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_ds_access GpoSecurity#audit_ds_access}

---

##### `auditLogonEvents`<sup>Optional</sup> <a name="auditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents"></a>

```typescript
public readonly auditLogonEvents: string;
```

- *Type:* string

Audit logon events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_logon_events GpoSecurity#audit_logon_events}

---

##### `auditObjectAccess`<sup>Optional</sup> <a name="auditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess"></a>

```typescript
public readonly auditObjectAccess: string;
```

- *Type:* string

Audit access attempts to non-AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_object_access GpoSecurity#audit_object_access}

---

##### `auditPolicyChange`<sup>Optional</sup> <a name="auditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange"></a>

```typescript
public readonly auditPolicyChange: string;
```

- *Type:* string

Audit attempts to change a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_policy_change GpoSecurity#audit_policy_change}

---

##### `auditPrivilegeUse`<sup>Optional</sup> <a name="auditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse"></a>

```typescript
public readonly auditPrivilegeUse: string;
```

- *Type:* string

Audit user attempts of exercising user rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_privilege_use GpoSecurity#audit_privilege_use}

---

##### `auditProcessTracking`<sup>Optional</sup> <a name="auditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking"></a>

```typescript
public readonly auditProcessTracking: string;
```

- *Type:* string

Audit process related events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_process_tracking GpoSecurity#audit_process_tracking}

---

##### `auditSystemEvents`<sup>Optional</sup> <a name="auditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents"></a>

```typescript
public readonly auditSystemEvents: string;
```

- *Type:* string

Audit system events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_system_events GpoSecurity#audit_system_events}

---

### GpoSecurityFilesystem <a name="GpoSecurityFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityFilesystem: gpoSecurity.GpoSecurityFilesystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl">acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path">path</a></code> | <code>string</code> | Path of the file or directory. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode">propagationMode</a></code> | <code>string</code> | Control permission propagation. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the file or directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#path GpoSecurity#path}

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

Control permission propagation.

0: Propagate permissions to all subfolders and files, 1: Replace existing permissions on all subfolders and files, 2: Do not allow permissions to be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityKerberosPolicy <a name="GpoSecurityKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityKerberosPolicy: gpoSecurity.GpoSecurityKerberosPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew">maxClockSkew</a></code> | <code>string</code> | Maximum time difference, in minutes, between the client clock and the server clock. (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge">maxRenewAge</a></code> | <code>string</code> | Number of days during which a ticket-granting ticket can be renewed (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge">maxServiceAge</a></code> | <code>string</code> | Maximum amount of minutes a ticket must be valid to access a service or resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge">maxTicketAge</a></code> | <code>string</code> | Maximum amount of hours a ticket-granting ticket is valid (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient">ticketValidateClient</a></code> | <code>string</code> | Control if the session ticket is validated for every request. A non-zero value disables the policy. |

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: string;
```

- *Type:* string

Maximum time difference, in minutes, between the client clock and the server clock. (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_clock_skew GpoSecurity#max_clock_skew}

---

##### `maxRenewAge`<sup>Optional</sup> <a name="maxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge"></a>

```typescript
public readonly maxRenewAge: string;
```

- *Type:* string

Number of days during which a ticket-granting ticket can be renewed (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_renew_age GpoSecurity#max_renew_age}

---

##### `maxServiceAge`<sup>Optional</sup> <a name="maxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge"></a>

```typescript
public readonly maxServiceAge: string;
```

- *Type:* string

Maximum amount of minutes a ticket must be valid to access a service or resource.

Minimum should be 10 and maximum should be equal to `max_ticket_age`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_service_age GpoSecurity#max_service_age}

---

##### `maxTicketAge`<sup>Optional</sup> <a name="maxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge"></a>

```typescript
public readonly maxTicketAge: string;
```

- *Type:* string

Maximum amount of hours a ticket-granting ticket is valid (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_ticket_age GpoSecurity#max_ticket_age}

---

##### `ticketValidateClient`<sup>Optional</sup> <a name="ticketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient"></a>

```typescript
public readonly ticketValidateClient: string;
```

- *Type:* string

Control if the session ticket is validated for every request. A non-zero value disables the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#ticket_validate_client GpoSecurity#ticket_validate_client}

---

### GpoSecurityPasswordPolicies <a name="GpoSecurityPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityPasswordPolicies: gpoSecurity.GpoSecurityPasswordPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword">clearTextPassword</a></code> | <code>string</code> | Store password with reversible encryption (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge">maximumPasswordAge</a></code> | <code>string</code> | Number of days before password expires (-1-999). If set to -1, it means the password never expires. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge">minimumPasswordAge</a></code> | <code>string</code> | Number of days a password must be used before changing it (0-999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>string</code> | Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity">passwordComplexity</a></code> | <code>string</code> | Password must meet complexity requirements (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize">passwordHistorySize</a></code> | <code>string</code> | The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16). |

---

##### `clearTextPassword`<sup>Optional</sup> <a name="clearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword"></a>

```typescript
public readonly clearTextPassword: string;
```

- *Type:* string

Store password with reversible encryption (0-2^16).

The password will not be stored with reversible encryption if the value is set to 0. Reversible encryption will be used in any other case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#clear_text_password GpoSecurity#clear_text_password}

---

##### `maximumPasswordAge`<sup>Optional</sup> <a name="maximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge"></a>

```typescript
public readonly maximumPasswordAge: string;
```

- *Type:* string

Number of days before password expires (-1-999). If set to -1, it means the password never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_password_age GpoSecurity#maximum_password_age}

---

##### `minimumPasswordAge`<sup>Optional</sup> <a name="minimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge"></a>

```typescript
public readonly minimumPasswordAge: string;
```

- *Type:* string

Number of days a password must be used before changing it (0-999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_age GpoSecurity#minimum_password_age}

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: string;
```

- *Type:* string

Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_length GpoSecurity#minimum_password_length}

---

##### `passwordComplexity`<sup>Optional</sup> <a name="passwordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity"></a>

```typescript
public readonly passwordComplexity: string;
```

- *Type:* string

Password must meet complexity requirements (0-2^16).

If set to 0, then requirements do not apply, any other value means requirements are applied

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_complexity GpoSecurity#password_complexity}

---

##### `passwordHistorySize`<sup>Optional</sup> <a name="passwordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize"></a>

```typescript
public readonly passwordHistorySize: string;
```

- *Type:* string

The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16).

A value of 0 indicates that the password history is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_history_size GpoSecurity#password_history_size}

---

### GpoSecurityRegistryKeys <a name="GpoSecurityRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityRegistryKeys: gpoSecurity.GpoSecurityRegistryKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl">acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName">keyName</a></code> | <code>string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode">propagationMode</a></code> | <code>string</code> | Control permission propagation. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

Control permission propagation.

0: Propagate permissions to all subkeys, 1: Replace existing permissions on all subkeys, 2: Do not allow permissions to be replaced on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityRegistryValues <a name="GpoSecurityRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityRegistryValues: gpoSecurity.GpoSecurityRegistryValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName">keyName</a></code> | <code>string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value">value</a></code> | <code>string</code> | The value of the key, matching the type set in `value_type`. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType">valueType</a></code> | <code>string</code> | Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the key, matching the type set in `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value GpoSecurity#value}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value_type GpoSecurity#value_type}

---

### GpoSecurityRestrictedGroups <a name="GpoSecurityRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityRestrictedGroups: gpoSecurity.GpoSecurityRestrictedGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof">groupMemberof</a></code> | <code>string</code> | Comma separated list of group names or SIDs that this group belongs to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers">groupMembers</a></code> | <code>string</code> | Comma separated list of group names or SIDs that are members of the group. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName">groupName</a></code> | <code>string</code> | Name of the group we are managing. |

---

##### `groupMemberof`<sup>Required</sup> <a name="groupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof"></a>

```typescript
public readonly groupMemberof: string;
```

- *Type:* string

Comma separated list of group names or SIDs that this group belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_memberof GpoSecurity#group_memberof}

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers"></a>

```typescript
public readonly groupMembers: string;
```

- *Type:* string

Comma separated list of group names or SIDs that are members of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_members GpoSecurity#group_members}

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Name of the group we are managing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_name GpoSecurity#group_name}

---

### GpoSecuritySystemLog <a name="GpoSecuritySystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecuritySystemLog: gpoSecurity.GpoSecuritySystemLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays">retentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecuritySystemServices <a name="GpoSecuritySystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecuritySystemServices: gpoSecurity.GpoSecuritySystemServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl">acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName">serviceName</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode">startupMode</a></code> | <code>string</code> | Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#service_name GpoSecurity#service_name}

---

##### `startupMode`<sup>Required</sup> <a name="startupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode"></a>

```typescript
public readonly startupMode: string;
```

- *Type:* string

Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#startup_mode GpoSecurity#startup_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### GpoSecurityAccountLockoutOutputReference <a name="GpoSecurityAccountLockoutOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityAccountLockoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceLogoffWhenHourExpire` <a name="resetForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire"></a>

```typescript
public resetForceLogoffWhenHourExpire(): void
```

##### `resetLockoutBadCount` <a name="resetLockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount"></a>

```typescript
public resetLockoutBadCount(): void
```

##### `resetLockoutDuration` <a name="resetLockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration"></a>

```typescript
public resetLockoutDuration(): void
```

##### `resetResetLockoutCount` <a name="resetResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount"></a>

```typescript
public resetResetLockoutCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput">forceLogoffWhenHourExpireInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput">lockoutBadCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput">lockoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput">resetLockoutCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire">forceLogoffWhenHourExpire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount">lockoutBadCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration">lockoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount">resetLockoutCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forceLogoffWhenHourExpireInput`<sup>Optional</sup> <a name="forceLogoffWhenHourExpireInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput"></a>

```typescript
public readonly forceLogoffWhenHourExpireInput: string;
```

- *Type:* string

---

##### `lockoutBadCountInput`<sup>Optional</sup> <a name="lockoutBadCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput"></a>

```typescript
public readonly lockoutBadCountInput: string;
```

- *Type:* string

---

##### `lockoutDurationInput`<sup>Optional</sup> <a name="lockoutDurationInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput"></a>

```typescript
public readonly lockoutDurationInput: string;
```

- *Type:* string

---

##### `resetLockoutCountInput`<sup>Optional</sup> <a name="resetLockoutCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput"></a>

```typescript
public readonly resetLockoutCountInput: string;
```

- *Type:* string

---

##### `forceLogoffWhenHourExpire`<sup>Required</sup> <a name="forceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire"></a>

```typescript
public readonly forceLogoffWhenHourExpire: string;
```

- *Type:* string

---

##### `lockoutBadCount`<sup>Required</sup> <a name="lockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount"></a>

```typescript
public readonly lockoutBadCount: string;
```

- *Type:* string

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: string;
```

- *Type:* string

---

##### `resetLockoutCount`<sup>Required</sup> <a name="resetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount"></a>

```typescript
public readonly resetLockoutCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityAccountLockout;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---


### GpoSecurityApplicationLogOutputReference <a name="GpoSecurityApplicationLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityApplicationLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod"></a>

```typescript
public resetAuditLogRetentionPeriod(): void
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize"></a>

```typescript
public resetMaximumLogSize(): void
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess"></a>

```typescript
public resetRestrictGuestAccess(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```typescript
public readonly auditLogRetentionPeriodInput: string;
```

- *Type:* string

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput"></a>

```typescript
public readonly maximumLogSizeInput: string;
```

- *Type:* string

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput"></a>

```typescript
public readonly restrictGuestAccessInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityApplicationLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---


### GpoSecurityAuditLogOutputReference <a name="GpoSecurityAuditLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityAuditLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod"></a>

```typescript
public resetAuditLogRetentionPeriod(): void
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize"></a>

```typescript
public resetMaximumLogSize(): void
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess"></a>

```typescript
public resetRestrictGuestAccess(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```typescript
public readonly auditLogRetentionPeriodInput: string;
```

- *Type:* string

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput"></a>

```typescript
public readonly maximumLogSizeInput: string;
```

- *Type:* string

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput"></a>

```typescript
public readonly restrictGuestAccessInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityAuditLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---


### GpoSecurityEventAuditOutputReference <a name="GpoSecurityEventAuditOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityEventAuditOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditAccountLogon` <a name="resetAuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon"></a>

```typescript
public resetAuditAccountLogon(): void
```

##### `resetAuditAccountManage` <a name="resetAuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage"></a>

```typescript
public resetAuditAccountManage(): void
```

##### `resetAuditDsAccess` <a name="resetAuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess"></a>

```typescript
public resetAuditDsAccess(): void
```

##### `resetAuditLogonEvents` <a name="resetAuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents"></a>

```typescript
public resetAuditLogonEvents(): void
```

##### `resetAuditObjectAccess` <a name="resetAuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess"></a>

```typescript
public resetAuditObjectAccess(): void
```

##### `resetAuditPolicyChange` <a name="resetAuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange"></a>

```typescript
public resetAuditPolicyChange(): void
```

##### `resetAuditPrivilegeUse` <a name="resetAuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse"></a>

```typescript
public resetAuditPrivilegeUse(): void
```

##### `resetAuditProcessTracking` <a name="resetAuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking"></a>

```typescript
public resetAuditProcessTracking(): void
```

##### `resetAuditSystemEvents` <a name="resetAuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents"></a>

```typescript
public resetAuditSystemEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput">auditAccountLogonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput">auditAccountManageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput">auditDsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput">auditLogonEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput">auditObjectAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput">auditPolicyChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput">auditPrivilegeUseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput">auditProcessTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput">auditSystemEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon">auditAccountLogon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage">auditAccountManage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess">auditDsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents">auditLogonEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess">auditObjectAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange">auditPolicyChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse">auditPrivilegeUse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking">auditProcessTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents">auditSystemEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditAccountLogonInput`<sup>Optional</sup> <a name="auditAccountLogonInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput"></a>

```typescript
public readonly auditAccountLogonInput: string;
```

- *Type:* string

---

##### `auditAccountManageInput`<sup>Optional</sup> <a name="auditAccountManageInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput"></a>

```typescript
public readonly auditAccountManageInput: string;
```

- *Type:* string

---

##### `auditDsAccessInput`<sup>Optional</sup> <a name="auditDsAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput"></a>

```typescript
public readonly auditDsAccessInput: string;
```

- *Type:* string

---

##### `auditLogonEventsInput`<sup>Optional</sup> <a name="auditLogonEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput"></a>

```typescript
public readonly auditLogonEventsInput: string;
```

- *Type:* string

---

##### `auditObjectAccessInput`<sup>Optional</sup> <a name="auditObjectAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput"></a>

```typescript
public readonly auditObjectAccessInput: string;
```

- *Type:* string

---

##### `auditPolicyChangeInput`<sup>Optional</sup> <a name="auditPolicyChangeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput"></a>

```typescript
public readonly auditPolicyChangeInput: string;
```

- *Type:* string

---

##### `auditPrivilegeUseInput`<sup>Optional</sup> <a name="auditPrivilegeUseInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput"></a>

```typescript
public readonly auditPrivilegeUseInput: string;
```

- *Type:* string

---

##### `auditProcessTrackingInput`<sup>Optional</sup> <a name="auditProcessTrackingInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput"></a>

```typescript
public readonly auditProcessTrackingInput: string;
```

- *Type:* string

---

##### `auditSystemEventsInput`<sup>Optional</sup> <a name="auditSystemEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput"></a>

```typescript
public readonly auditSystemEventsInput: string;
```

- *Type:* string

---

##### `auditAccountLogon`<sup>Required</sup> <a name="auditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon"></a>

```typescript
public readonly auditAccountLogon: string;
```

- *Type:* string

---

##### `auditAccountManage`<sup>Required</sup> <a name="auditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage"></a>

```typescript
public readonly auditAccountManage: string;
```

- *Type:* string

---

##### `auditDsAccess`<sup>Required</sup> <a name="auditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess"></a>

```typescript
public readonly auditDsAccess: string;
```

- *Type:* string

---

##### `auditLogonEvents`<sup>Required</sup> <a name="auditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents"></a>

```typescript
public readonly auditLogonEvents: string;
```

- *Type:* string

---

##### `auditObjectAccess`<sup>Required</sup> <a name="auditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess"></a>

```typescript
public readonly auditObjectAccess: string;
```

- *Type:* string

---

##### `auditPolicyChange`<sup>Required</sup> <a name="auditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange"></a>

```typescript
public readonly auditPolicyChange: string;
```

- *Type:* string

---

##### `auditPrivilegeUse`<sup>Required</sup> <a name="auditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse"></a>

```typescript
public readonly auditPrivilegeUse: string;
```

- *Type:* string

---

##### `auditProcessTracking`<sup>Required</sup> <a name="auditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking"></a>

```typescript
public readonly auditProcessTracking: string;
```

- *Type:* string

---

##### `auditSystemEvents`<sup>Required</sup> <a name="auditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents"></a>

```typescript
public readonly auditSystemEvents: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityEventAudit;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---


### GpoSecurityFilesystemList <a name="GpoSecurityFilesystemList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityFilesystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get"></a>

```typescript
public get(index: number): GpoSecurityFilesystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityFilesystem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>[]

---


### GpoSecurityFilesystemOutputReference <a name="GpoSecurityFilesystemOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityFilesystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput">propagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode">propagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `propagationModeInput`<sup>Optional</sup> <a name="propagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput"></a>

```typescript
public readonly propagationModeInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityFilesystem;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem">GpoSecurityFilesystem</a>

---


### GpoSecurityKerberosPolicyOutputReference <a name="GpoSecurityKerberosPolicyOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityKerberosPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetMaxRenewAge` <a name="resetMaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge"></a>

```typescript
public resetMaxRenewAge(): void
```

##### `resetMaxServiceAge` <a name="resetMaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge"></a>

```typescript
public resetMaxServiceAge(): void
```

##### `resetMaxTicketAge` <a name="resetMaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge"></a>

```typescript
public resetMaxTicketAge(): void
```

##### `resetTicketValidateClient` <a name="resetTicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient"></a>

```typescript
public resetTicketValidateClient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput">maxRenewAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput">maxServiceAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput">maxTicketAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput">ticketValidateClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew">maxClockSkew</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge">maxRenewAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge">maxServiceAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge">maxTicketAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient">ticketValidateClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: string;
```

- *Type:* string

---

##### `maxRenewAgeInput`<sup>Optional</sup> <a name="maxRenewAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput"></a>

```typescript
public readonly maxRenewAgeInput: string;
```

- *Type:* string

---

##### `maxServiceAgeInput`<sup>Optional</sup> <a name="maxServiceAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput"></a>

```typescript
public readonly maxServiceAgeInput: string;
```

- *Type:* string

---

##### `maxTicketAgeInput`<sup>Optional</sup> <a name="maxTicketAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput"></a>

```typescript
public readonly maxTicketAgeInput: string;
```

- *Type:* string

---

##### `ticketValidateClientInput`<sup>Optional</sup> <a name="ticketValidateClientInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput"></a>

```typescript
public readonly ticketValidateClientInput: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: string;
```

- *Type:* string

---

##### `maxRenewAge`<sup>Required</sup> <a name="maxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge"></a>

```typescript
public readonly maxRenewAge: string;
```

- *Type:* string

---

##### `maxServiceAge`<sup>Required</sup> <a name="maxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge"></a>

```typescript
public readonly maxServiceAge: string;
```

- *Type:* string

---

##### `maxTicketAge`<sup>Required</sup> <a name="maxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge"></a>

```typescript
public readonly maxTicketAge: string;
```

- *Type:* string

---

##### `ticketValidateClient`<sup>Required</sup> <a name="ticketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient"></a>

```typescript
public readonly ticketValidateClient: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityKerberosPolicy;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---


### GpoSecurityPasswordPoliciesOutputReference <a name="GpoSecurityPasswordPoliciesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityPasswordPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClearTextPassword` <a name="resetClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword"></a>

```typescript
public resetClearTextPassword(): void
```

##### `resetMaximumPasswordAge` <a name="resetMaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge"></a>

```typescript
public resetMaximumPasswordAge(): void
```

##### `resetMinimumPasswordAge` <a name="resetMinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge"></a>

```typescript
public resetMinimumPasswordAge(): void
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength"></a>

```typescript
public resetMinimumPasswordLength(): void
```

##### `resetPasswordComplexity` <a name="resetPasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity"></a>

```typescript
public resetPasswordComplexity(): void
```

##### `resetPasswordHistorySize` <a name="resetPasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize"></a>

```typescript
public resetPasswordHistorySize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput">clearTextPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput">maximumPasswordAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput">minimumPasswordAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput">passwordComplexityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput">passwordHistorySizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword">clearTextPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge">maximumPasswordAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge">minimumPasswordAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity">passwordComplexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize">passwordHistorySize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clearTextPasswordInput`<sup>Optional</sup> <a name="clearTextPasswordInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput"></a>

```typescript
public readonly clearTextPasswordInput: string;
```

- *Type:* string

---

##### `maximumPasswordAgeInput`<sup>Optional</sup> <a name="maximumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput"></a>

```typescript
public readonly maximumPasswordAgeInput: string;
```

- *Type:* string

---

##### `minimumPasswordAgeInput`<sup>Optional</sup> <a name="minimumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput"></a>

```typescript
public readonly minimumPasswordAgeInput: string;
```

- *Type:* string

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput"></a>

```typescript
public readonly minimumPasswordLengthInput: string;
```

- *Type:* string

---

##### `passwordComplexityInput`<sup>Optional</sup> <a name="passwordComplexityInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput"></a>

```typescript
public readonly passwordComplexityInput: string;
```

- *Type:* string

---

##### `passwordHistorySizeInput`<sup>Optional</sup> <a name="passwordHistorySizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput"></a>

```typescript
public readonly passwordHistorySizeInput: string;
```

- *Type:* string

---

##### `clearTextPassword`<sup>Required</sup> <a name="clearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword"></a>

```typescript
public readonly clearTextPassword: string;
```

- *Type:* string

---

##### `maximumPasswordAge`<sup>Required</sup> <a name="maximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge"></a>

```typescript
public readonly maximumPasswordAge: string;
```

- *Type:* string

---

##### `minimumPasswordAge`<sup>Required</sup> <a name="minimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge"></a>

```typescript
public readonly minimumPasswordAge: string;
```

- *Type:* string

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: string;
```

- *Type:* string

---

##### `passwordComplexity`<sup>Required</sup> <a name="passwordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity"></a>

```typescript
public readonly passwordComplexity: string;
```

- *Type:* string

---

##### `passwordHistorySize`<sup>Required</sup> <a name="passwordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize"></a>

```typescript
public readonly passwordHistorySize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityPasswordPolicies;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---


### GpoSecurityRegistryKeysList <a name="GpoSecurityRegistryKeysList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get"></a>

```typescript
public get(index: number): GpoSecurityRegistryKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRegistryKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>[]

---


### GpoSecurityRegistryKeysOutputReference <a name="GpoSecurityRegistryKeysOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput">propagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode">propagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `propagationModeInput`<sup>Optional</sup> <a name="propagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput"></a>

```typescript
public readonly propagationModeInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRegistryKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys">GpoSecurityRegistryKeys</a>

---


### GpoSecurityRegistryValuesList <a name="GpoSecurityRegistryValuesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get"></a>

```typescript
public get(index: number): GpoSecurityRegistryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRegistryValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>[]

---


### GpoSecurityRegistryValuesOutputReference <a name="GpoSecurityRegistryValuesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRegistryValues;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues">GpoSecurityRegistryValues</a>

---


### GpoSecurityRestrictedGroupsList <a name="GpoSecurityRestrictedGroupsList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRestrictedGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get"></a>

```typescript
public get(index: number): GpoSecurityRestrictedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRestrictedGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>[]

---


### GpoSecurityRestrictedGroupsOutputReference <a name="GpoSecurityRestrictedGroupsOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRestrictedGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput">groupMemberofInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput">groupMembersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof">groupMemberof</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers">groupMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupMemberofInput`<sup>Optional</sup> <a name="groupMemberofInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput"></a>

```typescript
public readonly groupMemberofInput: string;
```

- *Type:* string

---

##### `groupMembersInput`<sup>Optional</sup> <a name="groupMembersInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput"></a>

```typescript
public readonly groupMembersInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `groupMemberof`<sup>Required</sup> <a name="groupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof"></a>

```typescript
public readonly groupMemberof: string;
```

- *Type:* string

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers"></a>

```typescript
public readonly groupMembers: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRestrictedGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups">GpoSecurityRestrictedGroups</a>

---


### GpoSecuritySystemLogOutputReference <a name="GpoSecuritySystemLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecuritySystemLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod"></a>

```typescript
public resetAuditLogRetentionPeriod(): void
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize"></a>

```typescript
public resetMaximumLogSize(): void
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess"></a>

```typescript
public resetRestrictGuestAccess(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```typescript
public readonly auditLogRetentionPeriodInput: string;
```

- *Type:* string

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput"></a>

```typescript
public readonly maximumLogSizeInput: string;
```

- *Type:* string

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput"></a>

```typescript
public readonly restrictGuestAccessInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecuritySystemLog;
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---


### GpoSecuritySystemServicesList <a name="GpoSecuritySystemServicesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecuritySystemServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get"></a>

```typescript
public get(index: number): GpoSecuritySystemServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecuritySystemServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>[]

---


### GpoSecuritySystemServicesOutputReference <a name="GpoSecuritySystemServicesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecuritySystemServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput">startupModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode">startupMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `startupModeInput`<sup>Optional</sup> <a name="startupModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput"></a>

```typescript
public readonly startupModeInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `startupMode`<sup>Required</sup> <a name="startupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode"></a>

```typescript
public readonly startupMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecuritySystemServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices">GpoSecuritySystemServices</a>

---



